import React from "react";

// components
import Node from "./Node";

const Row = ({
  board,
  setBoard,
  row,
  makeWall,
  addWall,
  makeWeight,
  setStart,
  setEnd,
  onMouseUp,
  onMouseDown,
  onMouseEnter,
}) => {
  return (
    <div className="row">
      {row &&
        row.map(
          ({ row, col, isStart, isEnd, isWall, isVisited, isPath, weight }) => (
            <Node
              row={row}
              col={col}
              isStart={isStart}
              board={board}
              setBoard={setBoard}
              isEnd={isEnd}
              makeWall={makeWall}
              isWall={isWall}
              isVisited={isVisited}
              isPath={isPath}
              weight={weight}
              addWall={addWall}
              makeWeight={makeWeight}
              setStart={setStart}
              setEnd={setEnd}
              onMouseDown={onMouseDown}
              onMouseEnter={onMouseEnter}
              onMouseUp={onMouseUp}
              key={`${row} ${col}`}
            />
          )
        )}
    </div>
  );
};

export default Row;
