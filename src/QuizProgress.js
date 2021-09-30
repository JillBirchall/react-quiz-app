import React from "react";
import { Wrapper } from "./QuizProgress.styles";

export default function QuizProgress({ questionNumber, numberOfQuestions }) {
  return (
    <Wrapper>
      <span>{questionNumber}</span>/{numberOfQuestions}
    </Wrapper>
  );
}
