import React, { useState } from "react";

const Node = ({ makeWall, row, col, isStart, isEnd, isWall, isVisited }) => {
  return (
    <div
      className={
        isVisited && !isStart && !isEnd
          ? "cell visited"
          : isWall
          ? "cell wall"
          : isStart
          ? "cell starting-node"
          : isEnd
          ? "cell ending-node"
          : "cell"
      }
      onClick={() => makeWall(row, col)}
    />
  );
};

export default Node;
