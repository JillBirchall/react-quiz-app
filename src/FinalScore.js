import React from "react";
import { Wrapper } from "./FinalScore.styles";
import { Button } from "./Button.styles";

export default function FinalScore({ playAgain, score }) {
  return (
    <Wrapper>
      <h3 className="final-score-text">
        Final Score: <span className="final-score-number">{score}</span>
      </h3>
      <Button onClick={playAgain}>Play Again</Button>
    </Wrapper>
  );
}
