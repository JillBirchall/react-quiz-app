import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;

  .timer-bar {
    height: 10px;
    width: 100px;
    border: 1px solid #0073ff;
  }

  .timer-bar-full {
    height: 100%;
    width: 100%;
    background-color: green;
  }

  .seconds {
    font-family: ${(props) => props.theme.fonts.secondaryFont};
    color: ${(props) => props.theme.colours.headingColour};
    margin: 20px 0 0 0;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
  }

  @media (min-height: 500px) {
    .timer-bar {
      height: 30px;
      width: 150px;
      border: 1px solid #0073ff;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;
