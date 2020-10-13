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
}) => {
  const extraClasses = isEnd
    ? "ending-node"
    : isStart
    ? "starting-node"
    : isWall
    ? "wall"
    : isVisited
    ? "visited"
    : isPath
    ? "path"
    : "";
  return (
    <div className={`cell ${extraClasses}`} onClick={() => makeWall(row, col)}>
      {weight === 0 ? <span>&#8203;</span> : weight}
    </div>
  );
};

export default Node;
