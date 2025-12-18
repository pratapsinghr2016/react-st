import { useEffect, useState } from "react";
import "../react-questions/styles/progress-bar.css";

const ProgressBar = ({ scale }) => {
  const [scaleAfterDelay, setScaleAfterDelay] = useState(0);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setScaleAfterDelay(scale);
    }, 300);
    return () => clearTimeout(timeId);
  }, [scale]);

  return (
    <div
      className="parent"
      role="progressbar"
      aria-label="progressbar"
      aria-valuemax="100"
      aria-valuemin="0"
    >
      <div
        className="child"
        style={{
          width: scaleAfterDelay + "%",
          // transform: `translateX(-${scale}%)`,
        }}
      >
        {scale}%
      </div>
    </div>
  );
};

export default ProgressBar;
