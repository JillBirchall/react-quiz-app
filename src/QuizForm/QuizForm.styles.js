import styled from "styled-components";
import { Button } from "../Button.styles";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 300px;
  width: 100%;

  @media (orientation: landscape) and (min-width: 550px) {
    height: 250px;
  }

  @media (min-height: 500px) {
    .quiz-form {
      height: 400px;
    }
  }
`;

export const StartButton = styled(Button)`
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

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  .sliderLabel {
    color: ${(props) => props.theme.colours.textColour};
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.textFont};
  }

  .slider {
    width: 200px;
  }

  @media (min-width: 768px) {
    .slider {
      width: 400px;
    }
  }
`;

export const SelectBox = styled.div`
  margin: 30px 0 0 10px;
  font-family: ${(props) => props.theme.fonts.textFont};

  .select-box {
    margin: 0 0 20px 5px;
    font-size: 0.6rem;
  }

  label {
    color: ${(props) => props.theme.colours.textColour};
    font-weight: bold;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
      margin: 30px 0 0 20px;
  
    .select-box {
      margin-left: 10px;
      font-size: 0.8rem;
    }
  
    & label {
      margin-left: 10px;
      font-size: 1rem;
    }
`;
