import React, { useState, useEffect } from "react";
import AnswerButton from "./AnswerButton";
import { v4 as uuidv4 } from "uuid";

export default function Answers({
  answers,
  correctAnswer,
  answerQuestion,
  secondsLeft,
}) {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    setIsQuestionAnswered(false);
  }, [answers]);

  function selectAnswer(ans, isCorrectAnswer) {
    setIsQuestionAnswered(true);
    setSelectedAnswer(ans);
    answerQuestion(isCorrectAnswer);
  }

  return (
    <div className="answers">
      {answers.map((answer) => {
        return (
          <AnswerButton
            answer={answer}
            key={uuidv4()}
            isCorrectAnswer={correctAnswer === answer}
            secondsLeft={secondsLeft}
            isQuestionAnswered={isQuestionAnswered}
            selectAnswer={selectAnswer}
            isSelectedAnswer={selectedAnswer === answer}
          />
        );
      })}
    </div>
  );
}
