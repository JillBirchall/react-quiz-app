import React from "react";
import { Wrapper, HomeButton } from "./Error.styles";

const Error = ({ tryAgain }) => {
  return (
    <Wrapper>
      <h1>An Error has Occurred!</h1>
      <p>Something went wrong. Please try again!</p>
      <HomeButton onClick={tryAgain}>Home </HomeButton>
    </Wrapper>
  );
};

export default Error;
