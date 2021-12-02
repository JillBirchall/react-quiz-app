import styled, { css, keyframes } from "styled-components";

const blink = (colour1, colour2) =>
  keyframes`
{
  0% {
    background-color: ${colour2};
  }
  50% {
    background-color: ${colour2};
  }
  60% {
    background-color: ${colour1};
  }
  99% {
    background-color: ${colour1};
  }
  100% {
    background-color: ${colour2};
  }
}
`;

export const AnswerBtn = styled.button`
  font-family: ${(props) => props.theme.fonts.primaryFont};
  background-color: ${(props) =>
    props.questionAnswered
      ? props.correctAnswer
        ? props.theme.colours.correctAnswerColour
        : props.selectedAnswer
        ? props.theme.colours.incorrectAnswerColour
        : props.theme.colours.buttonColour
      : props.theme.colours.buttonColour};
  border: none;
  margin: 10px;
  padding: 5px 50px;
  width: 200px;
  min-height: 40px;
  border-radius: 9999px;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  outline: none;
  position: relative;

  ${(props) =>
    props.questionAnswered &&
    props.correctAnswer &&
    !props.selectedAnswer &&
    css`
      animation: ${blink(
          props.theme.colours.buttonColour,
          props.theme.colours.correctAnswerColour
        )}
        1s infinite;
    `}

  ${(props) =>
    !props.questionAnswered &&
    `
  &:hover {
    cursor: pointer;
    background-color: white;
    color: ${props.theme.colours.buttonColour};
    border: 1px solid ${props.theme.colours.buttonColour};
  }
  
  `}

  .score-increment {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .score-increment.hide {
    display: none;
  }

  @media (min-width: 768px) {
    width: 280px;
    min-height: 50px;
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    width: 300px;
    font-size: 1.4rem;
  }
`;
