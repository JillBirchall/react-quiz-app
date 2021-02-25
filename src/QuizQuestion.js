import React, { useState, useEffect } from "react";
import QuizProgress from "./QuizProgress";
import ScoreDisplay from "./ScoreDisplay";
import Timer from "./Timer";

export default function QuizQuestion({
  question,
  answers,
  correctAnswer,
  score,
  updateScore,
  questionNumber,
  getNextQuestion,
  numberOfQuestions,
}) {
  let intervalID;

  const [possibleAnswers, setPossibleAnswers] = useState(answers);
  const [secondsLeft, setSecondsLeft] = useState(15);

  function checkAnswer(e) {
    clearInterval(intervalID);
    if (e.target.innerText === correctAnswer) {
      updateScore(secondsLeft);
    }
    getNextQuestion();
    setSecondsLeft(15);
  }

  //Start the timer whenever the answers change
  useEffect(() => {
    intervalID = setInterval(() => {
      setSecondsLeft((prevState) => prevState - 1);
    }, 1000);
  }, [possibleAnswers]);

  //If the question hasn't been answered in the time, reset the timer and generate a new question
  useEffect(() => {
    if (secondsLeft < 0) {
      clearInterval(intervalID);
      getNextQuestion();
      setSecondsLeft(15);
    }
  }, [secondsLeft]);

  return (
    <div className="quiz-question">
      <div className="question-header">
        <QuizProgress
          questionNumber={questionNumber}
          numberOfQuestions={numberOfQuestions}
        />
        <Timer secondsLeft={secondsLeft} />
        <ScoreDisplay score={score} />
      </div>
      <h2 className="question-number">Question {questionNumber}</h2>
      <p className="question">{question}</p>
      <div className="answers">
        {answers.map((answer, index) => {
          return (
            <button
              className="btn answer-btn"
              key={index}
              onClick={(e) => checkAnswer(e)}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}
