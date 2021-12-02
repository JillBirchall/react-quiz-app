import { ThemeProvider } from "styled-components";

const theme = {
  colours: {
    backgroundColour: "#011638",
    headingColour: "#0d21a1",
    textColour: "#141414",
    buttonColour: "#0d21a1",
    secondaryColour: "#eef0f0",
    hoverButtonColour: "#009ddc",
    correctAnswerColour: " rgb(0, 172, 9)",
    incorrectAnswerColour: "rgb(209, 0, 0)",
  },
  fonts: {
    primaryFont: "Quicksand, Trebuchet, sans-serif",
    secondaryFont: "Roboto, sans-serif",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
