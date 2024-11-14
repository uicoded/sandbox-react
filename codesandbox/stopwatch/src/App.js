import { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [secondsPassed, setSecondsPassed] = useState(0);
  // const [cummulativeTime, setCummulativeTime] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    setStartTime(Date.now());
    setIsRunning(true);
    setNow(Date.now());

    // Clear any existing interval first to prevent multiple intervals
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    // Clean up the interval when stopping
    clearInterval(intervalRef.current);
    setIsRunning(false);
    // alert(secondsPassed);
    // setCummulativeTime(Number(secondsPassed));
  }

  function handleReset() {
    // setCummulativeTime(0);
    // handleStart();
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setSecondsPassed(0);
  }

  useEffect(() => {
    if (startTime != null && now != null) {
      setSecondsPassed((now - startTime) / 1000);
    }
  }, [now, startTime]);

  // if (startTime != null && now != null) {
  //   cummulativeTime.current =
  //     cummulativeTime.current + ((now - startTime) / 1000).toFixed(3);
  // }

  // if (startTime != null && now != null) {
  //   cummulativeTime =
  //     cummulativeTime + ((now - startTime) / 1000).toFixed(3);
  // }

  // if (startTime != null && now != null) {
  //   setCummulativeTime(cummulativeTime + (now - startTime) / 1000);
  // }

  useEffect(() => {
    // Cleanup function that runs when component unmounts
    return () => clearInterval(intervalRef.current);
  }, []); // Empty dependency array means this only runs on mount/unmount

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      {/* <h1>Time passed: {cummulativeTime}</h1> */}
      {isRunning ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
