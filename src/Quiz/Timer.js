import React, { useState, useEffect } from "react";
import { Wrapper } from "./Timer.styles";

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
    <Wrapper>
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
    </Wrapper>
  );
}
