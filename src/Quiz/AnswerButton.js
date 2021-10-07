import React, { useRef, useState, useEffect } from "react";
import { AnswerBtn } from "./AnswerButton.styles";

export default function AnswerButton({
  answer,
  isCorrectAnswer,
  secondsLeft,
  isQuestionAnswered,
  selectAnswer,
  isSelectedAnswer,
}) {
  const scoreIncrementDisplay = useRef();
  const [scoreIncrement, setScoreIncrement] = useState(0);

  useEffect(() => {
    if (isQuestionAnswered && isSelectedAnswer && isCorrectAnswer) {
      setScoreIncrement(getScoreIncrement());
      scoreIncrementDisplay.current.className = "score-increment";
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
    <AnswerBtn
      onMouseDown={() => checkAnswer()}
      questionAnswered={isQuestionAnswered}
      selectedAnswer={isSelectedAnswer}
      correctAnswer={isCorrectAnswer}
    >
      {answer}
      <span ref={scoreIncrementDisplay} className="score-increment hide">
        +{scoreIncrement}
      </span>
    </AnswerBtn>
  );
}
