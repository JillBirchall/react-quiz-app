import styled from "styled-components";

export const Text = styled.p`
  margin: 0 10px 10px 10px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: ${(props) => props.theme.fonts.secondaryFont};
  font-size: 12px;

  a {
    color: white;
  }
`;
