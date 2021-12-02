import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colours.buttonColour};
  color: white;
  font-family: ${(props) => props.theme.fonts.primaryFont};
  border: none;
  border-radius: 9999px;
  align-self: center;
  height: 30px;
  width: 100px;
  font-size: 1rem;
  position: absolute;
  bottom: 20px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colours.hoverButtonColour};
    color: ${(props) => props.theme.colours.secondaryColour};
  }

  @media (min-width: 1024px) {
    height: 40px;
    width: 140px;
    font-size: 1.2rem;
  }
`;
