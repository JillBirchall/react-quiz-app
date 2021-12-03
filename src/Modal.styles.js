import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: flex-start;
  overflow-y: scroll;

  .modal-box {
    margin: 5% 0;
    width: 80%;
    background-color: ${(props) => props.theme.colours.secondaryColour};
    padding: 0 1rem 1rem 1rem;
    border-radius: 20px;
    position: relative;

    h1 {
      text-align: center;
      font-size: 2rem;
      margin: 2rem 0;
    }

    h1,
    h2,
    th {
      font-family: ${(props) => props.theme.fonts.primaryFont};
      color: ${(props) => props.theme.colours.headingColour};
    }

    p {
      margin-bottom: 1.5rem;
      font-family: ${(props) => props.theme.fonts.secondaryFont};
    }

    th,
    td {
      text-align: left;
      height: 1rem;
      width: 15rem;
    }

    td {
      font-family: ${(props) => props.theme.fonts.secondaryFont};
    }

    .close-icon {
      color: ${(props) => props.theme.colours.headingColour};
      opacity: 0.7;
      font-size: 2.5rem;
      position: absolute;
      right: 20px;

      &:hover {
        cursor: pointer;
        font-weight: 700;
      }
    }
  }
`;
