import styled from "styled-components";
import { Button } from "../Button.styles";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 300px;
  width: 100%;
`;

export const StartButton = styled(Button)`
  font-family: var(--text-font-family);
  align-self: center;
  background-color: var(--primary-button-colour);
  color: white;
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  position: absolute;
  bottom: 20px;
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  .sliderLabel {
    color: var(--secondary-text-colour);
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    font-family: var(--text-font-family);
  }

  .slider {
    width: 200px;
  }
`;

export const SelectBox = styled.div`
  margin: 30px 0 0 10px;
  font-family: var(--text-font-family);

  .select-box {
    margin: 0 0 20px 5px;
    font-size: 0.6rem;
  }

  label {
    color: var(--secondary-text-colour);
    font-weight: bold;
    font-size: 0.8rem;
  }
`;
