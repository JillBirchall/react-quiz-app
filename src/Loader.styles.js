import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid white;
  border-top-color: var(--primary-button-colour);
  animation: rotate 2s linear infinite;
  -webkit-animation: rotate 2s linear infinite;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
    }
  }
`;
