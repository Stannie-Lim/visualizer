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
  setWall,
  addWall,
  weight,
  setWeight,
  dijkstras,
}) => {
  const MAX_WEIGHT = 100;
  const speed = 20;
  const [weights, setWeights] = useState([]);
  const [totalWeight, setTotalWeight] = useState(0);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < MAX_WEIGHT; i++) {
      arr.push(i + 1);
    }
    setWeights(arr);
  }, []);

  const callBFS = () => {
    try {
      BFS(board, setBoard, start, end, speed);
    } catch (err) {
      setError(err);
    }
  };

  const callDFS = () => {
    try {
      DFS(board, setBoard, start, end, speed);
    } catch (err) {
      setError(err);
    }
  };

  const callDijkstra = () => {
    try {
      dijkstras(board, setBoard, start, end, speed, setTotalWeight);
    } catch (err) {
      setError(err);
    }
  };

  const swapWallOrWeight = () => {
    setWall(!addWall);
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

      {totalWeight !== 0 ? <h1>Total weight: {totalWeight}</h1> : ""}
    </div>
  );
};

export default Controls;
