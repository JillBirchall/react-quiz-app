import React from "react";

export default function QuizProgress({ questionNumber, numberOfQuestions }) {
  return (
    <div className="progress">
      <span id="currentQuestion">{questionNumber}</span>/{numberOfQuestions}
    </div>
  );
}
