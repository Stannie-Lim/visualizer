import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";

// components
import Board from "./components/Board";
import Controls from "./components/Controls";

// algorithms
import BFS from "./algorithms/BFS";

const STARTPOINT = [1, 1];
const ENDPOINT = [5, 7];

const makeArray = (rSize, cSize) => {
  const newBoard = [];
  for (let row = 0; row < rSize; row++) {
    const arr = [];
    for (let col = 0; col < cSize; col++) {
      const node = {
        row,
        col,
        isStart: row === STARTPOINT[0] && col === STARTPOINT[1],
        isEnd: row === ENDPOINT[0] && col === ENDPOINT[1],
        isWall: false,
        isVisited: false,
        isPath: false,
      };
      arr.push(node);
    }
    newBoard.push(arr);
  }
  return newBoard;
};

const App = () => {
  const [board, setBoard] = useState(makeArray(15, 50));
  const [start, setStart] = useState(STARTPOINT);
  const [end, setEnd] = useState(ENDPOINT);

  const makeWall = (row, col) => {
    const newArray = [...board];
    newArray[row][col].isWall
      ? (newArray[row][col].isWall = false)
      : (newArray[row][col].isWall = true);
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
