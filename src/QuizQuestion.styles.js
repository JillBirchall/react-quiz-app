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
    font-family: var(--title-font-family);
    color: var(--primary-text-colour);
    font-size: 1rem;
  }

  .question {
    font-family: var(--text-font-family);
    color: var(--secondary-text-color);
    font-weight: normal;
    font-size: 1rem;
    margin: 0 10px 10px 10px;
    text-align: center;
  }
`;
