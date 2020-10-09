import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";

// components
import Board from "./components/Board";
import Controls from "./components/Controls";

// algorithms
import BFS from "./algorithms/BFS";

const STARTPOINT = [1, 1];
const ENDPOINT = [3, 3];

const makeArray = (size) => {
  const newBoard = [];
  for (let i = 0; i < size; i++) {
    const arr = [];
    for (let j = 0; j < size; j++) {
      if (i === STARTPOINT[0] && j === STARTPOINT[1]) arr.push("black");
      else if (i === ENDPOINT[0] && j === ENDPOINT[1]) arr.push("blue");
      else arr.push("white");
    }
    newBoard.push(arr);
  }
  return newBoard;
};

const App = () => {
  const [board, setBoard] = useState(makeArray(5));
  const [start, setStart] = useState(STARTPOINT);
  const [end, setEnd] = useState(ENDPOINT);

  const makeWall = (row, col) => {
    const newArray = [...board];
    newArray[row][col] === "white"
      ? (newArray[row][col] = "lightseagreen")
      : (newArray[row][col] = "white");
    setBoard(newArray);
  };

  return (
    <div className="main">
      <Controls
        BFS={BFS}
        start={start}
        end={end}
        board={board}
        setBoard={setBoard}
      />
      <Board board={board} makeWall={makeWall} />
    </div>
  );
};

export default App;
