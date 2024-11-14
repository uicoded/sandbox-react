import { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [secondsPassed, setSecondsPassed] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [offset, setOffset] = useState(0);

  function handleStart() {
    const now = Date.now();
    setIsRunning(true);

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSecondsPassed(offset + (Date.now() - now) / 1000);
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setOffset(secondsPassed);
  }

  function handleReset() {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setSecondsPassed(0);
    setOffset(0);
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
