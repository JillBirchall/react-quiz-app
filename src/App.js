import React, { useState, useEffect } from "react";
import axios from "axios";
//Components
import QuizForm from "./QuizForm/QuizForm";
import QuizQuestion from "./Quiz/QuizQuestion";
import FinalScore from "./FinalScore";
import Error from "./Error";
import Loader from "./Loader";
//Styles
import { Wrapper } from "./App.styles";
import Theme from "./Theme.styles";
import GlobalStyle from "./GlobalStyles";

function App() {
  const [isQuizInProgress, setIsQuizInProgress] = useState(false);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState();
  const [numberOfQuestions, setNumberOfQuestions] = useState();
  const [score, setScore] = useState(0);

  //Set the current question number score and isQuizInProgress flag once the questions have been loaded.
  useEffect(() => {
    if (questions.length === numberOfQuestions) {
      console.log("Quiz Started");
      setIsQuizInProgress(true);
      setCurrentQuestionNumber(0);
      resetScore();
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
    try {
      const res = await axios
        .get("https://opentdb.com/api.php", {
          params: {
            amount: questionsSelected,
            category: categoryId,
            difficulty: difficulty,
          },
        })
        .catch((error) => {
          throw new Error();
        });

      if (res.data.response_code === 0) {
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
      } else {
        throw new Error();
      }
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
    }
  }

  function toggleLoading(displayLoader) {
    setIsLoading(displayLoader);
  }

  function getNextQuestion() {
    if (currentQuestionNumber < numberOfQuestions - 1) {
      setCurrentQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
    } else {
      setIsQuizOver(true);
    }
  }

  function resetScore() {
    setScore(0);
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

    setScore(score + score_increment);
  }

  function decodeHTML(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  function playAgain() {
    setIsQuizOver(false);
  }

  function tryAgain() {
    setIsError(false);
  }

  return (
    <Theme>
      <GlobalStyle />
      <Wrapper>
        {/* <div className="quiz-box"> */}
        {!isQuizInProgress && !isQuizOver && !isLoading && !isError && (
          <QuizForm
            getQuestions={getQuestions}
            handleError={() => setIsError(true)}
          />
        )}
        {isError && <Error tryAgain={tryAgain} />}
        {isLoading && <Loader />}
        {isQuizInProgress && (
          <QuizQuestion
            question={questions[currentQuestionNumber].question}
            answers={questions[currentQuestionNumber].answers}
            correctAnswer={questions[currentQuestionNumber].correctAnswer}
            questionNumber={currentQuestionNumber + 1}
            getNextQuestion={getNextQuestion}
            numberOfQuestions={numberOfQuestions}
            score={score}
            updateScore={updateScore}
          />
        )}
        {isQuizOver && <FinalScore playAgain={playAgain} score={score} />}
        {/* </div> */}
      </Wrapper>
    </Theme>
  );
}

export default App;
