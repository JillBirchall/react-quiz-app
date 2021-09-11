import React from "react";
import { useGlobalContext } from "./context";

export default function ScoreDisplay() {
  const { score } = useGlobalContext();

  return <div className="score">Score: {score}</div>;
}
