import React, { useRef, useState, useEffect } from "react";
import Loader from "../Loader";
import { Wrapper, SelectBox } from "./QuizForm.styles";
import { Button } from "../Button.styles";

export const CategorySelect = ({
  updateCategoryAndDifficulty,
  handleError,
}) => {
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
        //check if res.status === 200 and if not, throw error
      })
      .catch((err) => handleError());
  }, [handleError]);

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
      <Wrapper onSubmit={handleSubmit}>
        <h1 className="title">Quiz</h1>
        <SelectBox>
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
        </SelectBox>
        <SelectBox>
          <label htmlFor="difficulty">Difficulty:</label>
          <select id="difficulty" ref={difficultySelect} className="select-box">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </SelectBox>
        <Button type="submit">Next</Button>
      </Wrapper>
    );
  }
};
