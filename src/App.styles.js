import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.colours.backgroundColour};
 

  .quiz-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 250px;
    width: 90%;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colours.secondaryColour};
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5),
      0 6px 20px 0 rgba(156, 156, 156, 0.3);
    position: relative;
  }

  .title {
    font-family:  ${(props) => props.theme.fonts.primaryFont};
    align-self: center;
    color:  ${(props) => props.theme.colours.headingColour};
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    .quiz-box {
      width: 70%;
    }
  }

  @media (orientation: landscape) and (min-width: 550px) {
    .quiz-box {
      width: 60%;
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
