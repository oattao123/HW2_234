import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [seconds, setSeconds] = useState(10);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          setRunning(false);
          clearInterval(intervalId);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running, seconds]);

  function handleReset() {
    setSeconds(10);
    setRunning(true);
  }

  function handlePause() {
    setRunning(false);
  }

  function handleResume() {
    setRunning(true);
  }

  return (
    <div>
      <p>Time left: {seconds} seconds</p>
      <button onClick={handleReset}>Reset</button>
      {running ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handleResume}>Resume</button>
      )}
    </div>
  );
}

export default CountdownTimer;
