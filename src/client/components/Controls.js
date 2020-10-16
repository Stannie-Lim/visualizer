import React, { useEffect, useState } from "react";

const Controls = ({
  BFS,
  DFS,
  start,
  end,
  board,
  setBoard,
  randomWalls,
  setError,
  clear,
  recursiveDivision,
  setWallOrWeight,
  addWall,
  weight,
  setWeight,
  dijkstras,
}) => {
  const MAX_WEIGHT = 100;
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < MAX_WEIGHT; i++) {
      arr.push(i + 1);
    }
    setWeights(arr);
  }, []);

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

  const callDijkstra = () => {
    try {
      dijkstras(board, setBoard, start, end);
    } catch (err) {
      setError(err);
    }
  };

  const swapWallOrWeight = () => {
    setWallOrWeight(!addWall);
  };

  const changeWeight = ({ target }) => {
    setWeight(target.value);
  };

  return (
    <div className="controls">
      <button onClick={callBFS}>BFS</button>
      <button onClick={callDFS}>DFS</button>
      <button onClick={callDijkstra}>Dijkstra</button>
      <button onClick={randomWalls}>Randomize Board</button>
      <button onClick={recursiveDivision}>Recursive Division</button>
      <button onClick={clear}>Clear</button>

      <div>
        <button onClick={swapWallOrWeight}>
          {!addWall ? "Add Wall" : "Add Weight"}
        </button>
        {!addWall ? (
          <select onChange={changeWeight}>
            {weights.map((weight) => (
              <option key={weight}>{weight}</option>
            ))}
          </select>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Controls;
