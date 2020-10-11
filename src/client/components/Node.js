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
    <div
      className={`cell ${extraClasses}`}
      onClick={() => makeWall(row, col)}
    />
  );
};

export default Node;
