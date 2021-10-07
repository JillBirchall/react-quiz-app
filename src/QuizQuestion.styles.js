import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .question-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 30px;
    padding: 10px 10px 5px 10px;
  }

  .question-number {
    font-family: ${(props) => props.theme.fonts.headingFont};
    color: ${(props) => props.theme.colours.headingColour};
    font-size: 1rem;
  }

  .question {
    font-family: ${(props) => props.theme.fonts.textFont};
    color: ${(props) => props.theme.fonts.textColour};
    font-weight: normal;
    font-size: 1rem;
    margin: 0 10px 10px 10px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .question-number {
      font-size: 1.3rem;
    }

    .question {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 1024px) {
    .question-number {
      font-size: 1.5rem;
    }

    .question {
      font-size: 1.5rem;
    }
  }
`;

// @media (min-height: 500px) {
//   .question {
//     font-size: 1.5rem;
//   }

//   .question-number {
//     font-size: 1.5rem;
//   }
// }
