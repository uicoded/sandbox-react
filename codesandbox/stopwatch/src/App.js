import { useState, useRef } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  // const [cummulativeTime, setCummulativeTime] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  function handleReset() {
    // setCummulativeTime(0);
    // handleStart();
  }

  function handleStart() {
    setStartTime(Date.now());
    setIsRunning(true);
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    // alert(secondsPassed);
    // setCummulativeTime(Number(secondsPassed));
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

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
