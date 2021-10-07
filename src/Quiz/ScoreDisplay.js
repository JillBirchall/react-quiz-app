import React from "react";
import { Wrapper } from "./ScoreDisplay.styles";

export default function ScoreDisplay({ score }) {
  return <Wrapper>Score: {score}</Wrapper>;
}
