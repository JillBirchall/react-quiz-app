import styled from "styled-components";

export const AnswerBtn = styled.button`
  font-family: var(--text-font-family);
  background-color: ${(props) =>
    props.questionAnswered
      ? props.correctAnswer
        ? " rgb(0, 172, 9)"
        : props.selectedAnswer
        ? " rgb(209, 0, 0)"
        : "var(--primary-button-colour)"
      : "var(--primary-button-colour)"};
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
    color: var(--primary-button-colour);
    border: 1px solid var(--primary-button-colour);
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
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    width: 300px;
  }
`;
