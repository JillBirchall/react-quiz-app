import React, { useState } from "react";
import { CategorySelect } from "./CategorySelect";
import { NumberOfQuestionsSelect } from "./NumberOfQuestionsSelect";

export default function QuizForm({ getQuestions }) {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [categoryId, setCategoryId] = useState();
  const [difficulty, setDifficulty] = useState("");

  function updateCategoryAndDifficulty(categoryId, difficulty) {
    setCategoryId(categoryId);
    setDifficulty(difficulty);
    setIsCategorySelected(true);
  }

  function startQuiz(numberOfQuestions) {
    console.log("start quiz called");
    getQuestions(categoryId, difficulty, numberOfQuestions);
  }

  if (isCategorySelected === false) {
    return (
      <CategorySelect
        updateCategoryAndDifficulty={updateCategoryAndDifficulty}
      />
    );
  } else {
    return (
      <NumberOfQuestionsSelect
        categoryId={categoryId}
        difficulty={difficulty}
        startQuiz={startQuiz}
      />
    );
  }
}
