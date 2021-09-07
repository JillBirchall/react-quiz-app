import React, { useState, useEffect, useRef } from "react";
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
  const [secondsLeft, setSecondsLeft] = useState(15);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  const intervalID = useRef(null);

  function checkAnswer(e) {
    clearInterval(intervalID.current);
    setQuestionAnswered(true);
    if (e.target.innerText === correctAnswer) {
      updateScore(secondsLeft);
    }
    setTimeout(() => {
      setQuestionAnswered(false);
      getNextQuestion();
      setSecondsLeft(15);
    }, 2000);
  }

  //Start the timer whenever the answers change
  useEffect(() => {
    intervalID.current = setInterval(() => {
      setSecondsLeft((prevState) => prevState - 1);
    }, 1000);
    console.log("New Interval Set");
  }, [answers]);

  //If the question hasn't been answered in the time, reset the timer and generate a new question
  useEffect(() => {
    if (secondsLeft < 0) {
      clearInterval(intervalID.current);
      getNextQuestion();
      setSecondsLeft(15);
    }
    console.log(intervalID.current);
  }, [secondsLeft, getNextQuestion]);

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
