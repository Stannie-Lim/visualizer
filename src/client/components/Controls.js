import React from "react";

const Controls = ({
  BFS,
  DFS,
  start,
  end,
  board,
  setBoard,
  randomWalls,
  setError,
}) => {
  const callBFS = () => {
    try {
      BFS(board, setBoard, start, end);
    } catch (err) {
      setError(err);
    }
  };

  const callDFS = () => {
    try {
      DFS(board, setBoard, start, end);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="controls">
      <button onClick={callBFS}>BFS</button>
      <button onClick={callDFS}>DFS</button>
      <button onClick={() => randomWalls()}>Randomize Board</button>
    </div>
  );
};

export default Controls;
