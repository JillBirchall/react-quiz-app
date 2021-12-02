import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
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
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => {
        setCategories(res.data.trivia_categories);
        setIsLoading(false);
      })
      .catch((error) => {
        handleError();
      });
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
        <h1 className="title">Trivia Quiz</h1>
        <SelectBox>
          <label htmlFor="category">Select a Category:</label>
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
          <label htmlFor="difficulty">Select a Difficulty:</label>
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
