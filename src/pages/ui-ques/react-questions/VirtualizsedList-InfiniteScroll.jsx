import { useCallback, useEffect, useRef, useState } from "react";

const listArr = Array.from({ length: 1000000 }, (_, idx) => idx + 1);

const windowHeight = 600;
const itemHeight = 35;
const BUFFER = 3;

const VirtualizedIO = () => {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);
  const topSentinelRef = useRef(null);
  const bottomSentinelRef = useRef(null);

  const visibleCount = Math.ceil(windowHeight / itemHeight);
  const endIndex = Math.min(startIndex + visibleCount + BUFFER, listArr.length);
  const actualStart = Math.max(0, startIndex - BUFFER);

  const slicedList = listArr.slice(actualStart, endIndex);

  // The callback — still uses scrollTop!
  const recalculateIndices = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollTop } = container;  // 👈 Same formula as scroll event
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    setStartIndex(newStartIndex);
  }, []);

  // Setup Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Fire when ANY sentinel enters or exits viewport
        const shouldUpdate = entries.some(
          (entry) => entry.isIntersecting || !entry.isIntersecting
        );
        if (shouldUpdate) {
          recalculateIndices();
        }
      },
      {
        root: containerRef.current,  // Viewport = scroll container
        rootMargin: "50px",          // Trigger slightly before visible
        threshold: 0,
      }
    );

    if (topSentinelRef.current) observer.observe(topSentinelRef.current);
    if (bottomSentinelRef.current) observer.observe(bottomSentinelRef.current);

    return () => observer.disconnect();
  }, [recalculateIndices, startIndex]); // 👈 Re-setup when startIndex changes

  return (
    <div
      ref={containerRef}
      style={{ height: windowHeight, width: 350, overflow: "auto" }}
    >
      <div style={{ height: itemHeight * listArr.length, position: "relative" }}>
        {/* Top Sentinel — invisible, positioned at top of rendered chunk */}
        <div
          ref={topSentinelRef}
          style={{
            position: "absolute",
            top: actualStart * itemHeight,
            height: 1,
            width: "100%",
          }}
        />

        {slicedList.map((item, index) => (
          <div
            key={item}
            style={{
              height: itemHeight,
              position: "absolute",
              top: (actualStart + index) * itemHeight,
            }}
          >
            Item {item}
          </div>
        ))}

        {/* Bottom Sentinel — positioned at bottom of rendered chunk */}
        <div
          ref={bottomSentinelRef}
          style={{
            position: "absolute",
            top: endIndex * itemHeight,
            height: 1,
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default VirtualizedIO