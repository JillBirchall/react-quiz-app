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
