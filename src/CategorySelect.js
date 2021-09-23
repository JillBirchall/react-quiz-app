import React, { useRef, useState, useEffect } from "react";
import Loader from "./Loader";

export const CategorySelect = ({ updateCategoryAndDifficulty }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const categorySelect = useRef();
  const difficultySelect = useRef();

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.trivia_categories);
        setIsLoading(false);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    updateCategoryAndDifficulty(
      categorySelect.current.value,
      difficultySelect.current.value
    );
  }

  if (isLoading) return <Loader />;
  else {
    return (
      <form className="quiz-form" onSubmit={handleSubmit}>
        <h1 className="title">Quiz</h1>
        <div className="select-box-container">
          <label htmlFor="category">Category:</label>
          <select id="category" ref={categorySelect} className="select-box">
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="select-box-container">
          <label htmlFor="difficulty">Difficulty:</label>
          <select id="difficulty" ref={difficultySelect} className="select-box">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button type="submit" className="btn start-btn">
          Next
        </button>
      </form>
    );
  }
};
