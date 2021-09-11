import React, { useRef, useState, useEffect } from "react";

export default function AnswerButton({
  answer,
  isCorrectAnswer,
  secondsLeft,
  isQuestionAnswered,
  selectAnswer,
  isSelectedAnswer,
}) {
  const answerButton = useRef();
  const scoreIncrementDisplay = useRef();
  const [scoreIncrement, setScoreIncrement] = useState(0);

  useEffect(() => {
    if (isQuestionAnswered) {
      if (isCorrectAnswer) {
        answerButton.current.className = "btn answer-btn right";
        if (isSelectedAnswer) {
          setScoreIncrement(getScoreIncrement());
          scoreIncrementDisplay.current.className = "score-increment";
        }
      } else {
        if (isSelectedAnswer) {
          answerButton.current.className = "btn answer-btn incorrect";
        }
      }
    }
  }, []);

  function getScoreIncrement() {
    let score_increment;

    if (secondsLeft > 10) {
      score_increment = 30;
    } else if (secondsLeft > 5) {
      score_increment = 20;
    } else {
      score_increment = 10;
    }

    return score_increment;
  }

  function checkAnswer() {
    if (isQuestionAnswered) return;
    selectAnswer(answer, isCorrectAnswer);
  }

  return (
    <button
      ref={answerButton}
      className="btn answer-btn"
      onClick={() => checkAnswer()}
    >
      {answer}
      <span ref={scoreIncrementDisplay} className="score-increment hide">
        +{scoreIncrement}
      </span>
    </button>
  );
  // }
}
