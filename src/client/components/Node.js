import { useDrag } from "react-dnd";
import React, { useState } from "react";

const CARD = "card";

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
  isDragging,
  text,
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

  const [{ opacity }, dragRef] = useDrag({
    item: { type: CARD, text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div
      ref={isStart || isEnd ? dragRef : null}
      style={{ opacity }}
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
