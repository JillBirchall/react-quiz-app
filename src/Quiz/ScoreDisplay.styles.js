import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fonts.primaryFont};
  color: ${(props) => props.theme.colours.headingColour};
  font-size: 1.2rem;
  margin-right: 30px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;
