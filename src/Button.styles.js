import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colours.buttonColour};
  color: white;
  font-family: ${(props) => props.theme.fonts.textFont};
  border: none;
  border-radius: 5px;
  align-self: center;
  height: 30px;
  width: 100px;
  font-size: 1rem;
  position: absolute;
  bottom: 20px;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: ${(props) => props.theme.colours.buttonColour};
    border: 1px solid ${(props) => props.theme.colours.buttonColour};
  }

  @media (min-width: 1024px) {
    height: 40px;
    width: 120px;
    font-size: 1.2rem;
  }
`;
