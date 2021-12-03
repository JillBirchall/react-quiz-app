import React from "react";
import { Button } from "./HelpButton.styles";

export const HelpButton = ({ toggleModal }) => {
  return <Button onClick={toggleModal}>?</Button>;
};

export default HelpButton;
