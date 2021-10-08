import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
  background: white;

  .title {
    font-family:  ${(props) => props.theme.fonts.headingFont};
    align-self: center;
    color:  ${(props) => props.theme.colours.headingColour};
    font-size: 1.5rem;
  }

  @media (orientation: landscape) and (min-width: 550px) {
    .quiz-box {
      min-width: 60%;
    }

    @media (orientation: landscape) and (min-width: 768px) {

      .title {
        font-size: 2rem;
      }

      .quiz-box {
        min-height: 350px;
      }
    }
    
@media (min-height: 500px) {

  .quiz-box {
    min-height: 300px;
  }

  .title {
    align-self: center;
    font-size: 2.5rem;
  }
}
`;
