import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50%;
  border: none;
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.theme.colours.secondaryColour};
  color: ${(props) => props.theme.colours.headingColour};
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.secondaryFont};
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 20px;

  &:hover {
    background-color: ${(props) => props.theme.colours.hoverButtonColour};
    color: ${(props) => props.theme.colours.secondaryColour};
    cursor: pointer;
  }
`;
