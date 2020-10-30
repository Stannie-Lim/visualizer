import React, { useState } from "react";

// components
import Row from "./Row";

const Board = ({
  board,
  setBoard,
  makeWall,
  start,
  end,
  addWall,
  makeWeight,
  setStart,
  setEnd,
}) => {
  return (
    <div className="grid">
      {board.map((row, index) => {
        return (
          <Row
            row={row}
            key={index}
            board={board}
            setBoard={setBoard}
            makeWall={makeWall}
            start={start}
            end={end}
            addWall={addWall}
            makeWeight={makeWeight}
            setStart={setStart}
            setEnd={setEnd}
          />
        );
      })}
    </div>
  );
};

export default Board;
