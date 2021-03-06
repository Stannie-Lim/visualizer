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
  const [isMouseDown, setMouseDown] = useState(false);
  const [removeWalls, setRemoveWalls] = useState(false);
  const [isMovingStart, setIsMovingStart] = useState(false);

  const [addWalls, setAddWalls] = useState(false);

  const [previousStart, setPreviousStart] = useState([]);
  const [start, setStart] = useState(STARTPOINT);
  const [end, setEnd] = useState(ENDPOINT);

  const [error, setError] = useState("");
  const [weight, setWeight] = useState(1);
  const [addWall, setWall] = useState(true);

  const [timer, setTimer] = useState(0);

  const makeWall = (row, col) => {
    if (
      board[row][col].isStart ||
      board[row][col].isEnd ||
      isStart(row, col) ||
      isEnd(row, col)
    )
      return;

    const _board = [...board];
    if (removeWalls) {
      document.querySelector(`#node-${row}-${col}`).classList.remove("wall");
      _board[row][col].isWall = false;
    } else {
      document.querySelector(`#node-${row}-${col}`).classList.add("wall");
      _board[row][col].isWall = true;
    }
    setBoard(board);
  };

  const isWall = (row, col) => {
    return document
      .querySelector(`#node-${row}-${col}`)
      .classList.contains("wall");
  };

  const isStart = (row, col) => {
    return document
      .querySelector(`#node-${row}-${col}`)
      .classList.contains("starting-node");
  };

  const isEnd = (row, col) => {
    return document
      .querySelector(`#node-${row}-${col}`)
      .classList.contains("ending-node");
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
    const { order, newBoard } = recursiveDivision(board, setBoard, start, end);
    animateMaze(order, setBoard, newBoard);
  };

  const clear = () => {
    setBoard(makeArray(ROWS, COLS, STARTPOINT, ENDPOINT));
  };

  const onMouseDown = (row, col) => {
    if (!isStart(row, col) && !isEnd(row, col)) {
      setAddWalls(true);
      if (isWall(row, col)) setRemoveWalls(true);
      else setRemoveWalls(false);
    } else {
      setStart([row, col]);
      setPreviousStart([start[0], start[1]]);
    }
    setMouseDown(true);
  };

  const onMouseEnter = (row, col) => {
    if (!isMouseDown) return;
    if (addWalls) {
      makeWall(row, col);
    } else {
      if (isWall(row, col)) return;
      setIsMovingStart(true);
      document
        .querySelector(`#node-${start[0]}-${start[1]}`)
        .classList.remove("starting-node");
      setStart([row, col]);
      document
        .querySelector(`#node-${row}-${col}`)
        .classList.add("starting-node");
    }
  };

  const onMouseUp = (row, col) => {
    if (addWalls) {
      setAddWalls(false);
    } else if (isMovingStart) {
      console.log(1);
      const _board = [...board];
      _board[row][col].isStart = true;
      _board[previousStart[0]][previousStart[1]].isStart = false;
      setBoard(_board);
      setIsMovingStart(false);
    }
    setMouseDown(false);
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
          setTimer={setTimer}
          timer={timer}
        />
        <h1 className="error">{error}</h1>
      </div>
      <Board
        board={board}
        setBoard={setBoard}
        makeWall={makeWall}
        addWall={addWall}
        makeWeight={makeWeight}
        setStart={setStart}
        setEnd={setEnd}
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
        onMouseUp={onMouseUp}
      />
    </div>
  );
};

export default App;
