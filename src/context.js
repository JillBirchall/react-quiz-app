import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  //   questions: [],
  //   isQuizInProgress: false,
  //   isQuizOver: false,
  //   isLoading: false,
  score: 0,
  //   numberOfQuestions: 0,
  //   currentQuestionNumber: 1,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateScore = (timeRemaining) => {
    dispatch({ type: "UPDATE_SCORE", payload: timeRemaining });
  };

  const resetScore = () => {
    dispatch({ type: "RESET_SCORE" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        updateScore,
        resetScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
