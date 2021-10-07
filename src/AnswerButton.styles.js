import styled from "styled-components";

export const AnswerBtn = styled.button`
  font-family: ${(props) => props.theme.fonts.textFont};
  background-color: ${(props) =>
    props.questionAnswered
      ? props.correctAnswer
        ? " rgb(0, 172, 9)"
        : props.selectedAnswer
        ? " rgb(209, 0, 0)"
        : props.theme.colours.buttonColour
      : props.theme.colours.buttonColour};
  border: none;
  margin: 10px;
  padding: 5px 50px;
  width: 200px;
  min-height: 40px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  outline: none;
  position: relative;

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
