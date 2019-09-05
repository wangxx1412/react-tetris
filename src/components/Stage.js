import React from "react";
import { StyledStage } from "./styles/StyledStage";

import Cell from "./Cell";

//Each time rendering the stage, each cell is rendered
//Given a new props type of first element of cell
const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
