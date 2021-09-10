import React, { useState, useEffect } from "react";

export default function AnswerButton({
  answer,
  isCorrectAnswer,
  answerQuestion,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(false);

  function checkAnswer() {
    setSelectedAnswer(true);
    console.log(isCorrectAnswer);
    answerQuestion(isCorrectAnswer);
  }

  useEffect(() => {
    console.log("Answer" + answer + " " + isCorrectAnswer);
  }, []);

  // return (
  //   <button
  //     className={`${
  //       selectedAnswer
  //         ?
  //       isCorrectAnswer ? "btn answer-btn correct" : "btn answer-btn incorrect"
  //       : "btn answer-btn"
  //     }`}
  //     onClick={() => checkAnswer()}
  //   >
  //     {answer}
  //   </button>
  // );
  if (selectedAnswer) {
    // return (
    //   <button
    //     className={`${
    //       isCorrectAnswer ? "btn answer-btn right" : "btn answer-btn incorrect"
    //     }`}
    //     onClick={() => checkAnswer()}
    //   >
    //     {answer}
    //   </button>
    // );
    if (isCorrectAnswer) {
      return (
        <button className="btn answer-btn right" onClick={() => checkAnswer()}>
          {answer}
        </button>
      );
    } else {
      return (
        <button
          className="btn answer-btn incorrect"
          onClick={() => checkAnswer()}
        >
          {answer}
        </button>
      );
    }
  } else {
    return (
      <button className="btn answer-btn" onClick={() => checkAnswer()}>
        {answer}
      </button>
    );
  }
}
