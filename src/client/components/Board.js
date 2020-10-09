import React, { useState } from "react";

// components
import Row from "./Row";

const Board = ({ board, makeWall }) => {
  return (
    <div className="grid">
      {board.map((colors, index) => (
        <Row key={index} colors={colors} rowIndex={index} makeWall={makeWall} />
      ))}
    </div>
  );
};

export default Board;
