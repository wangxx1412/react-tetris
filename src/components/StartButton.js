import React from "react";
import { StyledStarterButton } from "./styles/StyledStarterButton";

const StartButton = ({ callback }) => (
  <StyledStarterButton onClick={callback}>Start Game</StyledStarterButton>
);

export default StartButton;
