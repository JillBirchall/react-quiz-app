import styled from "styled-components";
import { Button } from "./Button.styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;

  h1 {
    font-family: ${(props) => props.theme.fonts.primaryFont};
    color: ${(props) => props.theme.colours.headingColour};
    font-size: 1.8rem;
  }

  p {
    font-family: ${(props) => props.theme.fonts.secondaryFont};
    color: ${(props) => props.theme.colours.textColour};
    text-align: center;
  }
`;

export const HomeButton = styled(Button)`
  font-family: ${(props) => props.theme.fonts.secondaryFont};
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
