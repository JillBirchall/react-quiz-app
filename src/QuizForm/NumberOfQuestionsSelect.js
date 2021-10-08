import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import { Wrapper, Slider } from "./QuizForm.styles";
import { Button } from "../Button.styles";

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
        //check if res.status === 200 and if not, throw error
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
      <Wrapper onSubmit={handleSubmit}>
        <Slider>
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
          <Button type="submit">Start Quiz</Button>
        </Slider>
      </Wrapper>
    );
  }
};
