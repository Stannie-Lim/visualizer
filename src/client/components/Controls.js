import React from "react";

const Controls = ({ BFS, start, end, board, setBoard, randomWalls }) => {
  return (
    <div className="controls">
      <button onClick={() => BFS(board, setBoard, start, end)}>BFS</button>
      <button onClick={() => randomWalls()}>Randomize Board</button>
    </div>
  );
};

export default Controls;
