import { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(Date.now());
  const [secondsPassed, setSecondsPassed] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    setStartTime(Date.now());
    setIsRunning(true);

    // Clear any existing interval first to prevent multiple intervals
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSecondsPassed((Date.now() - startTime) / 1000);
    }, 10);
  }

  function handleStop() {
    // Clean up the interval when stopping
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setSecondsPassed(0);
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      {isRunning ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
