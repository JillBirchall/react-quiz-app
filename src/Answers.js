import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AnswerButton from "./AnswerButton";
import { Wrapper } from "./Answers.styles";

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
    <Wrapper>
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
    </Wrapper>
  );
}
