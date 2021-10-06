import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (orientation: landscape) and (min-width: 550px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    justify-content: flex-start;
    align-content: flex-start;
    min-height: 100px;
    margin-bottom: 20px;
  }

  @media (min-height: 500px) {
    align-content: center;
    min-height: 200px;
    margin-bottom: 20px;
  }
`;
