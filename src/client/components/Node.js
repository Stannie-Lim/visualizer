import React, { useState } from "react";
import { ItemTypes } from "../utils/ItemTypes";

const Node = ({
  board,
  setBoard,
  makeWall,
  row,
  col,
  isStart,
  isEnd,
  isWall,
  isVisited,
  isPath,
  weight,
  addWall,
  makeWeight,
  setStart,
  setEnd,
}) => {
  const extraClasses = isEnd
    ? "ending-node"
    : isStart
    ? "starting-node"
    : weight
    ? "weight"
    : isWall
    ? "wall"
    : isVisited
    ? "visited"
    : isPath
    ? "path"
    : "";

  return (
    <div
      id={`node-${row}-${col}`}
      className={`cell ${extraClasses}`}
      onClick={() => {
        if (addWall) {
          makeWall(row, col);
        } else {
          makeWeight(row, col);
        }
      }}
    >
      {weight === 0 ? <span>&#8203;</span> : weight}
    </div>
  );
};

export default Node;
