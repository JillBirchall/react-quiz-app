import "./App.css";
import QuizForm from "./QuizForm";
import React, { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import FinalScore from "./FinalScore";
import axios from "axios";

function App() {
  const NUMBER_OF_QUESTIONS = 20;

  const [score, setScore] = useState(0);
  const [isQuizInProgress, setIsQuizInProgress] = useState(false);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState();

  //Set the current question number score and isQuizInProgress flag once the questions have been loaded.
  useEffect(() => {
    if (questions.length === NUMBER_OF_QUESTIONS) {
      setIsQuizInProgress(true);
      setCurrentQuestionNumber(0);
      setScore(0); //resets the score
    }
  }, [questions]);

  useEffect(() => {
    if (isQuizOver) {
      setIsQuizInProgress(false);
    }
  }, [isQuizOver]);

  async function getQuestions(categoryId, difficulty) {
    const res = await axios.get("https://opentdb.com/api.php", {
      params: {
        amount: NUMBER_OF_QUESTIONS,
        category: categoryId,
        difficulty: difficulty,
        // type: "multiple",
      },
    });
    let retrievedQuestions = res.data.results.map((result, index) => {
      let allAnswers = [
        ...result.incorrect_answers.map((answer) => decodeHTML(answer)),
        decodeHTML(result.correct_answer),
      ];
      return {
        id: `${index}-${Date.now()}`,
        question: decodeHTML(result.question),
        answers: allAnswers.sort(() => Math.random() - 0.5),
        correctAnswer: decodeHTML(result.correct_answer),
      };
    });
    console.log(retrievedQuestions);
    setQuestions(retrievedQuestions);
  }

  function updateScore(timeRemaining) {
    let score_increment;

    if (timeRemaining > 10) {
      score_increment = 30;
    } else if (timeRemaining > 5) {
      score_increment = 20;
    } else {
      score_increment = 10;
    }
    setScore((prevScore) => prevScore + score_increment);
  }

  function getNextQuestion() {
    if (currentQuestionNumber < 19) {
      setCurrentQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
    } else {
      setIsQuizOver(true);
    }
  }

  function decodeHTML(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  function playAgain() {
    setIsQuizOver(false);
  }

  return (
    <div className="container">
      <div className="quiz-box">
        {!isQuizInProgress && !isQuizOver && (
          <QuizForm getQuestions={getQuestions} />
        )}
        {isQuizInProgress && (
          <QuizQuestion
            question={questions[currentQuestionNumber].question}
            answers={questions[currentQuestionNumber].answers}
            correctAnswer={questions[currentQuestionNumber].correctAnswer}
            score={score}
            updateScore={updateScore}
            questionNumber={currentQuestionNumber + 1}
            getNextQuestion={getNextQuestion}
            numberOfQuestions={NUMBER_OF_QUESTIONS}
          />
        )}
        {isQuizOver && <FinalScore score={score} playAgain={playAgain} />}
      </div>
    </div>
  );
}

export default App;

//Need to make the answer button red or green depending on whether or not the answer is correct
//Perhaps try managing the state in useReducer instead?
//Add a loader for when it is loading the categories, and the questions
//Consider hard-coding categories instead of getting them from the API, as some categories do not have enough questions and will cause errors. Check which categories do  and don't work.
