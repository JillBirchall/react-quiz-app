import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 280px;
  width: 100%;

  @media (min-width: 1024px) {
    height: 400px;
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
    color: ${(props) => props.theme.colours.headingColour};
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.primaryFont};
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

  .select-box {
    margin: 0 0 20px 5px;
    font-size: 12px;
    font-family: ${(props) => props.theme.fonts.secondaryFont};
  }

  label {
    color: ${(props) => props.theme.colours.headingColour};
    font-family: ${(props) => props.theme.fonts.primaryFont};
    font-weight: bold;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
      margin: 30px 0 0 20px;
  
    .select-box {
      margin-left: 10px;
      font-size: 1rem;
    }
  
    & label {
      margin-left: 10px;
      font-size: 1.2rem;
    }
`;
