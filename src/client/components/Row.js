import React from "react";

// components
import Node from "./Node";

const Row = ({ row, makeWall }) => {
  return (
    <div className="row">
      {row &&
        row.map(({ row, col, isStart, isEnd, isWall, isVisited, isPath }) => (
          <Node
            row={row}
            col={col}
            isStart={isStart}
            isEnd={isEnd}
            makeWall={makeWall}
            isWall={isWall}
            isVisited={isVisited}
            isPath={isPath}
            key={`${row} ${col}`}
          />
        ))}
    </div>
  );
};

export default Row;
