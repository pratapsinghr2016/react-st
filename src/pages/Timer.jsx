import { useEffect, useState } from "react";
// https://claude.ai/chat/cc6a6cca-feb7-4dd6-b1f3-cd6d0b0be522
const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(10);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        }

        // Seconds hit 0, check minutes
        setMinutes((prevMinutes) => {
          if (prevMinutes > 0) {
            setSeconds(59);
            return prevMinutes - 1;
          }

          // Minutes hit 0, check hours
          setHours((prevHours) => {
            if (prevHours > 0) {
              setMinutes(59);
              setSeconds(59);
              return prevHours - 1;
            }

            // Timer finished
            setIsRunning(false);
            return 0;
          });
          return 0;
        });
        return 0;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isRunning]);

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(10);
    setIsRunning(true);
  };

  return (
    <>
      <div>Hours: {hours}</div>
      <div>Minutes: {minutes}</div>
      <div>Seconds: {seconds}</div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Resume"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Timer;
