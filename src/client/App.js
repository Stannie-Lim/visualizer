import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";

// components
import Board from "./components/Board";
import Controls from "./components/Controls";

// pathfinding algorithms
import BFS from "./algorithms/pathfinding/BFS";
import DFS from "./algorithms/pathfinding/DFS";
import dijkstras from "./algorithms/pathfinding/dijkstras";

// maze algorithms
import recursiveDivision from "./algorithms/maze/recursiveDivision";

// common
import { makeArray } from "./utils/common";

// animate
import { animateMaze } from "./animate/animateMaze";

const STARTPOINT = [10, 10];
const ENDPOINT = [10, 40];

const [ROWS, COLS] = [21, 51];

const App = () => {
  const [board, setBoard] = useState(
    makeArray(ROWS, COLS, STARTPOINT, ENDPOINT)
  );

  const [start, setStart] = useState(STARTPOINT);
  const [end, setEnd] = useState(ENDPOINT);

  const [error, setError] = useState("");
  const [weight, setWeight] = useState(1);
  const [addWall, setWall] = useState(true);

  const makeWall = (row, col) => {
    const newArray = [...board];
    newArray[row][col].isWall
      ? (newArray[row][col].isWall = false)
      : (newArray[row][col].isWall = true);
    setBoard(newArray);
  };

  const makeWeight = (row, col) => {
    const newArray = [...board];
    if (newArray[row][col].isWall) {
      newArray[row][col].isWall = false;
      newArray[row][col].weight = 0;
    } else {
      newArray[row][col].isWall = false;
      newArray[row][col].weight = weight * 1;
    }
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
    const { order, newBoard } = recursiveDivision(
      board,
      setBoard,
      STARTPOINT,
      ENDPOINT
    );
    animateMaze(order, setBoard, newBoard);
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
          addWall={addWall}
          setWall={setWall}
          makeWeight={makeWeight}
          weight={weight}
          setWeight={setWeight}
          dijkstras={dijkstras}
        />
        <h1 className="error">{error}</h1>
      </div>
      <Board
        board={board}
        makeWall={makeWall}
        addWall={addWall}
        makeWeight={makeWeight}
      />
    </div>
  );
};

export default App;
