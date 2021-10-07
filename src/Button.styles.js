import styled from "styled-components";

export const Button = styled.button`
  &:hover {
    cursor: pointer;
    background-color: white;
    color: ${(props) => props.theme.colours.buttonColour};
    border: 1px solid ${(props) => props.theme.colours.buttonColour};
  }
`;
