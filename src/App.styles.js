import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
    font-family: var(--title-font-family);
    align-self: center;
    color: var(--primary-text-colour);
    font-size: 1.5rem;
  }
`;
