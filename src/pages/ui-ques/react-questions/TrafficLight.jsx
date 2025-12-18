import { useEffect, useState } from "react";

const config = {
  red: {
    next: "yellow",
    delay: 5000,
  },
  yellow: {
    next: "green",
    delay: 2000,
  },
  green: {
    next: "red",
    delay: 3000,
  },
};

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState("green");

  useEffect(() => {
    // Only get config for CURRENT light
    const { next, delay } = config[currentLight];

    // Set ONE timer for the current light
    const timerId = setTimeout(() => {
      setCurrentLight(next);
    }, delay);

    return () => clearTimeout(timerId);
  }, [currentLight]);

  const handleReset = () => {
    setCurrentLight("green");
  };

  return (
    <>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: currentLight,
          border: "2px solid black",
        }}
      />
      <div>{currentLight}</div>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default TrafficLight;
