import "./App.css";
import QuizForm from "./QuizForm";
import React, { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import FinalScore from "./FinalScore";
import Loader from "./Loader";
import axios from "axios";

function App() {
  const [score, setScore] = useState(0);
  const [isQuizInProgress, setIsQuizInProgress] = useState(false);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState();
  const [numberOfQuestions, setNumberOfQuestions] = useState();

  //Set the current question number score and isQuizInProgress flag once the questions have been loaded.
  useEffect(() => {
    if (questions.length === numberOfQuestions) {
      console.log("Quiz Started");
      setIsQuizInProgress(true);
      setCurrentQuestionNumber(0);
      setScore(0); //resets the score
    }
  }, [questions, numberOfQuestions]);

  useEffect(() => {
    if (isQuizOver) {
      setIsQuizInProgress(false);
    }
  }, [isQuizOver]);

  async function getQuestions(categoryId, difficulty, questionsSelected) {
    setIsLoading(true);
    setNumberOfQuestions(questionsSelected);
    const res = await axios.get("https://opentdb.com/api.php", {
      params: {
        amount: questionsSelected,
        category: categoryId,
        difficulty: difficulty,
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
    setQuestions(retrievedQuestions);
    setIsLoading(false);
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
    if (currentQuestionNumber < numberOfQuestions - 1) {
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
        {!isQuizInProgress && !isQuizOver && !isLoading && (
          <QuizForm getQuestions={getQuestions} />
        )}
        {isLoading && <Loader />}
        {isQuizInProgress && (
          <QuizQuestion
            question={questions[currentQuestionNumber].question}
            answers={questions[currentQuestionNumber].answers}
            correctAnswer={questions[currentQuestionNumber].correctAnswer}
            score={score}
            updateScore={updateScore}
            questionNumber={currentQuestionNumber + 1}
            getNextQuestion={getNextQuestion}
            numberOfQuestions={numberOfQuestions}
          />
        )}
        {isQuizOver && <FinalScore score={score} playAgain={playAgain} />}
      </div>
    </div>
  );
}

export default App;

//Need to make the answer button red or green depending on whether or not the answer is correct
//Add a loader for when it is loading the categories, and the questions
