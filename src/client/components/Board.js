import React, { useState } from "react";

// components
import Row from "./Row";

const Board = ({ board, makeWall, start, end, addWall, makeWeight }) => {
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
            addWall={addWall}
            makeWeight={makeWeight}
          />
        );
      })}
    </div>
  );
};

export default Board;
