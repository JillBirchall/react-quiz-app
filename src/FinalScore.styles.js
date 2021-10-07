import styled from "styled-components";
import { Button } from "./Button.styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;

  .final-score-text {
    font-family: ${(props) => props.theme.fonts.headingFont};
    font-size: 30px;
    color: rgb(0, 38, 95);
    text-align: center;
  }

  .final-score-number {
    color: rgb(0, 78, 194);
  }
`;

export const PlayAgainButton = styled(Button)`
  font-family: ${(props) => props.theme.fonts.textFont};
  align-self: center;
  background-color: ${(props) => props.theme.colours.buttonColour};
  color: white;
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  position: absolute;
  bottom: 20px;

  @media (min-width: 1024px) {
    height: 40px;
    width: 120px;
    font-size: 1.2rem;
  }
`;
