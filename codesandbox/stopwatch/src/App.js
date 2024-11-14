import { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [secondsPassed, setSecondsPassed] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    const now = Date.now();
    setIsRunning(true);

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSecondsPassed((Date.now() - now) / 1000);
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
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
    </>
  );
}
