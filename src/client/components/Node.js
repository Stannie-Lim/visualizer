import React, { useState } from "react";

const Node = ({
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
