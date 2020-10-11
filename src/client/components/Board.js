import React, { useState } from "react";

// components
import Row from "./Row";

const Board = ({ board, makeWall, start, end }) => {
  return (
    <div className="grid">
      {board.map((row, index) => {
        return (
          <Row
            row={row}
            key={index}
            makeWall={makeWall}
            start={start}
            end={end}
          />
        );
      })}
    </div>
  );
};

export default Board;
