import React, { useState } from "react";
import { CategorySelect } from "./CategorySelect";
import { NumberOfQuestionsSelect } from "./NumberOfQuestionsSelect";

export default function QuizForm({ getQuestions, handleError }) {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [categoryId, setCategoryId] = useState();
  const [difficulty, setDifficulty] = useState("");

  function updateCategoryAndDifficulty(categoryId, difficulty) {
    setCategoryId(categoryId);
    setDifficulty(difficulty);
    setIsCategorySelected(true);
  }

  function startQuiz(numberOfQuestions) {
    getQuestions(categoryId, difficulty, numberOfQuestions);
  }

  if (isCategorySelected === false) {
    return (
      <CategorySelect
        updateCategoryAndDifficulty={updateCategoryAndDifficulty}
        handleError={handleError}
      />
    );
  } else {
    return (
      <NumberOfQuestionsSelect
        categoryId={categoryId}
        difficulty={difficulty}
        startQuiz={startQuiz}
        handleError={handleError}
      />
    );
  }
}
