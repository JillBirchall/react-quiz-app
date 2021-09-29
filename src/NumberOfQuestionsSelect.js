import React, { useState, useEffect } from "react";
import Loader from "./Loader";

export const NumberOfQuestionsSelect = ({
  categoryId,
  difficulty,
  startQuiz,
  handleError,
}) => {
  const [maxQuestions, setMaxQuestions] = useState();
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://opentdb.com/api_count.php?category=${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        let questionsAvailable =
          data.category_question_count[`total_${difficulty}_question_count`];
        setMaxQuestions(questionsAvailable > 50 ? 50 : questionsAvailable);
        setIsLoading(false);
      })
      .catch((err) => handleError());
  }, [categoryId, difficulty]);

  function handleSubmit(e) {
    e.preventDefault();
    startQuiz(parseInt(numberOfQuestions));
  }

  if (isLoading) return <Loader />;
  else {
    return (
      <form className="quiz-form" onSubmit={handleSubmit}>
        <div className="sliderContainer">
          <div>
            <p className="sliderLabel">
              Questions: <span>{numberOfQuestions}</span>
            </p>
            <input
              type="range"
              min="1"
              max={maxQuestions}
              value={numberOfQuestions}
              onChange={(e) => setNumberOfQuestions(e.target.value)}
              className="slider"
            />
          </div>
          <button type="submit" className="btn start-btn">
            Start Quiz
          </button>
        </div>
      </form>
    );
  }
};
