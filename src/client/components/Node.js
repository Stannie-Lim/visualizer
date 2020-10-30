import { useDrag, useDrop } from "react-dnd";
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

  const [draggingStart, dragStart] = useDrag({
    item: { name, type: ItemTypes.START },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        const newBoard = [...board];
        newBoard[row][col].isStart = false;

        const [newRow, newCol] = dropResult.name.split("-");
        newBoard[newRow * 1][newCol * 1].isStart = true;
        setStart([newRow * 1, newCol * 1]);
        setBoard(newBoard);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [draggingEnd, dragEnd] = useDrag({
    item: { name, type: ItemTypes.START },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        const newBoard = [...board];
        newBoard[row][col].isEnd = false;

        const [newRow, newCol] = dropResult.name.split("-");
        newBoard[newRow * 1][newCol * 1].isEnd = true;
        setEnd([newRow * 1, newCol * 1]);
        setBoard(newBoard);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.START,
    drop: () => ({ name: `${row}-${col}` }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={isStart && !isEnd ? dragStart : !isStart && isEnd ? dragEnd : drop}
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
