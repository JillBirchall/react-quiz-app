import React, { useState, useEffect } from "react";

export const NumberOfQuestionsSelect = ({
  categoryId,
  difficulty,
  startQuiz,
}) => {
  const [maxQuestions, setMaxQuestions] = useState();
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);

  useEffect(() => {
    fetch(`https://opentdb.com/api_count.php?category=${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        let questionsAvailable =
          data.category_question_count[`total_${difficulty}_question_count`];
        setMaxQuestions(questionsAvailable > 50 ? 50 : questionsAvailable);
      });
  }, [categoryId, difficulty]);

  function handleSubmit(e) {
    e.preventDefault();
    startQuiz(parseInt(numberOfQuestions));
  }

  return (
    <form className="quiz-form" onSubmit={handleSubmit}>
      <div className="slidecontainer">
        <p>
          Questions: <span>{numberOfQuestions}</span>
        </p>
        <input
          type="range"
          min="1"
          max={maxQuestions}
          value={numberOfQuestions}
          onChange={(e) => setNumberOfQuestions(e.target.value)}
        />
      </div>
      <button type="submit" className="btn start-btn">
        Start Quiz
      </button>
    </form>
  );
};
