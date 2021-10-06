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
    font-family: var(--title-font-family);
    color: var(--primary-text-colour);
    margin: 10px 0 0 0;
    text-align: center;
    font-size: 1em;
  }

  @media (min-height: 500px) {
    .timer-bar {
      height: 30px;
      width: 150px;
      border: 1px solid #0073ff;
    }

    .seconds {
      font-size: 1.5em;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;
