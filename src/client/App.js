import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";

// components
import Board from "./components/Board";

const makeArray = (size) => {
  const newBoard = [];
  for (let i = 0; i < size; i++) {
    const arr = [];
    for (let j = 0; j < size; j++) {
      arr.push("white");
    }
    newBoard.push(arr);
  }
  return newBoard;
};

const App = () => {
  const [board, setBoard] = useState(makeArray(40));

  const makeWall = (row, col) => {
    const newArray = [...board];
    newArray[row][col] === "white"
      ? (newArray[row][col] = "lightseagreen")
      : (newArray[row][col] = "white");
    setBoard(newArray);
  };

  return (
    <div className="main">
      <Board board={board} makeWall={makeWall} />
    </div>
  );
};

export default App;
