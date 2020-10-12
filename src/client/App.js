import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";

// components
import Board from "./components/Board";
import Controls from "./components/Controls";

// pathfinding algorithms
import BFS from "./algorithms/pathfinding/BFS";
import DFS from "./algorithms/pathfinding/DFS";

// maze algorithms
import recursiveDivision from "./algorithms/maze/recursiveDivision";

// common
import { makeArray } from "./utils/common";

const STARTPOINT = [1, 1];
const ENDPOINT = [13, 1];

const [ROWS, COLS] = [31, 31];

const App = () => {
  const [board, setBoard] = useState(
    makeArray(ROWS, COLS, STARTPOINT, ENDPOINT)
  );
  const [start, setStart] = useState(STARTPOINT);
  const [end, setEnd] = useState(ENDPOINT);
  const [error, setError] = useState("");

  const makeWall = (row, col) => {
    const newArray = [...board];
    newArray[row][col].isWall
      ? (newArray[row][col].isWall = false)
      : (newArray[row][col].isWall = true);
    setBoard(newArray);
  };

  const randomWalls = () => {
    const _board = [...board];
    for (let i = 0; i < _board.length; i++) {
      for (let j = 0; j < _board[i].length; j++) {
        const randomBool = Math.floor(Math.random() * 4) === 0;
        if (i === start[0] && j === start[1]) continue;
        if (i === end[0] && j === end[1]) continue;
        _board[i][j].isWall = randomBool;
      }
    }
    setBoard(_board);
  };

  const recursiveDivisionMaze = () => {
    recursiveDivision(board, setBoard, STARTPOINT, ENDPOINT);
  };

  const clear = () => {
    setBoard(makeArray(ROWS, COLS, STARTPOINT, ENDPOINT));
  };

  return (
    <div className="main">
      <div className="top">
        <Controls
          BFS={BFS}
          DFS={DFS}
          start={start}
          end={end}
          board={board}
          randomWalls={randomWalls}
          clear={clear}
          recursiveDivision={recursiveDivisionMaze}
          setBoard={setBoard}
          setError={setError}
        />
        <h1 className="error">{error}</h1>
      </div>
      <Board board={board} makeWall={makeWall} />
    </div>
  );
};

export default App;
