import React, { useState, useEffect, useRef } from "react";
import Answers from "./Answers";
import QuizProgress from "./QuizProgress";
import ScoreDisplay from "./ScoreDisplay";
import Timer from "./Timer";

export default function QuizQuestion({
  question,
  answers,
  correctAnswer,
  questionNumber,
  getNextQuestion,
  numberOfQuestions,
  score,
  updateScore,
}) {
  const [secondsLeft, setSecondsLeft] = useState(15);

  const intervalID = useRef(null);

  function answerQuestion(isAnswerCorrect) {
    clearInterval(intervalID.current);
    if (isAnswerCorrect) {
      updateScore(secondsLeft);
    }
    setTimeout(() => {
      getNextQuestion();
      setSecondsLeft(15);
    }, 2000);
  }

  //Start the timer whenever the answers change
  useEffect(() => {
    intervalID.current = setInterval(() => {
      setSecondsLeft((prevState) => prevState - 1);
    }, 1000);
  }, [answers]);

  //If the question hasn't been answered in the time, reset the timer and generate a new question
  useEffect(() => {
    if (secondsLeft < 0) {
      clearInterval(intervalID.current);
      getNextQuestion();
      setSecondsLeft(15);
    }
  }, [secondsLeft, getNextQuestion]);

  return (
    <div className="quiz-question">
      <div className="question-header">
        <ScoreDisplay score={score} />
        <QuizProgress
          questionNumber={questionNumber}
          numberOfQuestions={numberOfQuestions}
        />
      </div>
      <Timer secondsLeft={secondsLeft} />
      <h2 className="question-number">Question {questionNumber}</h2>
      <p className="question">{question}</p>
      <Answers
        answers={answers}
        correctAnswer={correctAnswer}
        answerQuestion={answerQuestion}
        secondsLeft={secondsLeft}
      />
    </div>
  );
}
