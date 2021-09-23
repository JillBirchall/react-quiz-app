import React from "react";

export default function FinalScore({ playAgain, score }) {
  return (
    <div className="final-score">
      <h3 className="final-score-text">
        Final Score: <span className="final-score-number">{score}</span>
      </h3>
      <button className="play-again-btn btn" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
}
