const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SCORE":
      let score_increment;

      if (action.payload > 10) {
        score_increment = 30;
      } else if (action.payload > 5) {
        score_increment = 20;
      } else {
        score_increment = 10;
      }
      let newScore = state.score + score_increment;
      return { ...state, score: newScore };
    case "RESET_SCORE":
      return { ...state, score: 0 };
    // case "UPDATE_IS_LOADING":
    // case "UPDATE__IS_QUIZ_IN_PROGRESS":
    // case "UPDATE_IS_QUIZ_OVER":
    // case "GET_QUESTIONS":
    // case "SET_NUMBERS_OF_QUESTIONS":
    // case "UPDATE_QUESTION_NUMBER":
    default: {
      throw new Error("Action Type Not Found");
    }
  }
};

export default reducer;
