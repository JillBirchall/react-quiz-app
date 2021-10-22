import React from "react";
import { Text } from "./Footer.styles";

const Footer = () => {
  return (
    <Text>
      {" "}
      The trivia questions featured in this quiz are provided by the&nbsp;
      <span>
        <a href="http://opentdb.com">Open Trivia DB</a>
      </span>
      . These questions are licensed under a&nbsp;
      <span>
        <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
          Creative Commons Attribution-ShareAlike 4.0 International License
        </a>
      </span>
    </Text>
  );
};

export default Footer;
