import React from "react";

const Controls = ({ BFS, start, end, board, setBoard }) => {
  return (
    <div className="controls">
      <button onClick={() => BFS(board, setBoard, start, end)}>BFS</button>
    </div>
  );
};

export default Controls;
