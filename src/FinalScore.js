import React from "react";
import { Wrapper, PlayAgainButton } from "./FinalScore.styles";

export default function FinalScore({ playAgain, score }) {
  return (
    <Wrapper>
      <h3 className="final-score-text">
        Final Score: <span className="final-score-number">{score}</span>
      </h3>
      <PlayAgainButton onClick={playAgain}>Play Again</PlayAgainButton>
    </Wrapper>
  );
}
