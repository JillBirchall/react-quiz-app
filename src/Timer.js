import React, { useState, useEffect } from "react";

export default function Timer({ secondsLeft }) {
  const [timerColour, setTimerColour] = useState("green");

  useEffect(() => {
    if (secondsLeft > 10) {
      setTimerColour("green");
    } else if (secondsLeft > 5) {
      setTimerColour("yellow");
    } else {
      setTimerColour("red");
    }
  }, [secondsLeft]);

  return (
    <div className="timer" id="questionTimer">
      <p className="seconds">{secondsLeft}</p>
      <div className="timer-bar">
        <div
          className="timer-bar-full"
          style={{
            width: `${(secondsLeft / 15) * 100}%`,
            backgroundColor: `${timerColour}`,
          }}
        ></div>
      </div>
    </div>
  );
}
