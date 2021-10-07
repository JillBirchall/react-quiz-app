import { ThemeProvider } from "styled-components";

const theme = {
  colours: {
    headingColour: "rgb(0, 78, 194)",
    textColour: "rgb(0, 38, 95)",
    buttonColour: "rgb(153, 0, 255)",
  },
  fonts: {
    headingFont: "Comfortaa, cursive",
    textFont: "Open Sans, sans-serif",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
