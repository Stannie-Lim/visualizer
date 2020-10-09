import React from "react";

const Row = ({ colors, rowIndex, makeWall }) => {
  return (
    <div className="row">
      {colors.map((color, colIndex) => (
        <div
          className="cell"
          key={colIndex}
          style={{ backgroundColor: color }}
          onClick={() => makeWall(rowIndex, colIndex)}
        />
      ))}
    </div>
  );
};

export default Row;
