import React from "react";

const Controls = ({ BFS, DFS, start, end, board, setBoard, randomWalls }) => {
  return (
    <div className="controls">
      <button onClick={() => BFS(board, setBoard, start, end)}>BFS</button>
      <button onClick={() => DFS(board, setBoard, start, end)}>DFS</button>
      <button onClick={() => randomWalls()}>Randomize Board</button>
    </div>
  );
};

export default Controls;
