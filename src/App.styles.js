import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: rgb(98, 0, 255);
  background: linear-gradient(
    132deg,
    rgba(98, 0, 255, 1) 0%,
    rgba(0, 116, 255, 1) 100%
  );

  .quiz-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 250px;
    width: 80%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.65);
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5),
      0 6px 20px 0 rgba(156, 156, 156, 0.3);
    position: relative;
  }

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
