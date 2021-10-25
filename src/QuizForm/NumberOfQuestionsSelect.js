import React, { useState, useEffect } from "react";
import axios from "axios";
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
    axios
      .get("https://opentdb.com/api_count.php", {
        params: {
          category: categoryId,
        },
      })
      .then((res) => {
        let questionsAvailable =
          res.data.category_question_count[
            `total_${difficulty}_question_count`
          ];
        setMaxQuestions(questionsAvailable > 50 ? 50 : questionsAvailable);
        setIsLoading(false);
      })
      .catch((error) => {
        handleError();
      });
  }, [handleError, categoryId, difficulty]);

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
