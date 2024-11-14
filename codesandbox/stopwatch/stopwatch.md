# Stopwatch React Notes

## useRef

[useRef](https://react.dev/reference/react/useRef) is a React Hook that lets you reference a value that’s not needed for rendering.

#### Why to useRef with Intervals?

The useRef hook is crucial when working with intervals in React because:

1. It persists between renders
2. Updating it doesn't trigger re-renders
3. It helps prevent memory leaks by storing the interval ID (and cleanup function)

I'll explain how `useRef` is used with intervals in React, particularly in your stopwatch implementation.

```js

// codesandbox/stopwatch/src/App.js
// ... existing code ...

const intervalRef = useRef(null);

function handleStart() {
  setStartTime(Date.now());
  setIsRunning(true);
  setNow(Date.now());

  // Clear any existing interval first to prevent multiple intervals
  clearInterval(intervalRef.current);
  // Store the new interval ID in the ref
  intervalRef.current = setInterval(() => {
    setNow(Date.now());
  }, 10);
}

function handleStop() {
  // Clean up the interval when stopping
  clearInterval(intervalRef.current);
  setIsRunning(false);
}

function handleReset() {
  // Make sure to clear the interval when resetting
  clearInterval(intervalRef.current);
  setIsRunning(false);
  setStartTime(0);
}
// ... existing code ...
```

Ensure that the interval is properly cleaned up when the component is removed from the DOM, preventing memory leaks.

```js
import { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const intervalRef = useRef(null);
  // ... existing code ...

  useEffect(() => {
    // Cleanup function that runs when component unmounts
    return () => clearInterval(intervalRef.current);
  }, []); // Empty dependency array means this only runs on mount/unmount

  // ... rest of your component
}
```

---

## useEffect

[useEffect](https://react.dev/reference/react/useEffect) is a React Hook that lets you [synchronize a component with an external system.](https://react.dev/learn/synchronizing-with-effects)

- It runs the setup function when component is added to the DOM
- If setup function returns a function, then it is a cleanup function that is when components is removed from DOM.
- It runs the setup function after every render with changed dependencies

[You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
Effects are an escape hatch from the React paradigm. They let you “step outside” of React and synchronize your components with some external system like a non-React widget, network, or the browser DOM. If there is no external system involved (for example, if you want to update a component’s state when some props or state change), you shouldn’t need an Effect. Removing unnecessary Effects will make your code easier to follow, faster to run, and less error-prone.