import { makeArray } from "../../utils/common";

const recursiveDivision = (board, setBoard, STARTPOINT, ENDPOINT) => {
  const [rows, cols] = [board.length, board[0].length];

  const newBoard = makeArray(rows, cols, STARTPOINT, ENDPOINT);

  const inner = [];
  addInnerWalls(newBoard, true, 1, cols - 2, 1, rows - 2, inner);

  const outer = addOuterWalls(newBoard, rows, cols);

  return {
    order: [...outer, ...inner],
    newBoard,
  };
};

const addOuterWalls = (newBoard, rows, cols) => {
  const arr = [];

  for (let i = 0; i < rows; i++) {
    if (i === 0 || i === rows - 1) {
      for (let j = 0; j < cols; j++) {
        if (!isStartOrEnd(newBoard, i, j)) {
          newBoard[i][j].isWall = true;
          arr.push(newBoard[i][j]);
        }
      }
    } else {
      if (!isStartOrEnd(newBoard, i, 0)) {
        newBoard[i][0].isWall = true;
        arr.push(newBoard[i][0]);
      }
      if (!isStartOrEnd(newBoard, i, cols - 1)) {
        newBoard[i][cols - 1].isWall = true;
        arr.push(newBoard[i][cols - 1]);
      }
    }
  }

  return arr;
};

const addInnerWalls = (newBoard, horizontal, minX, maxX, minY, maxY, arr) => {
  if (horizontal) {
    if (maxX - minX < 2) return;

    const y = Math.floor(getRandomNumber(minY, maxY) / 2) * 2;
    addHorizontalWall(newBoard, minX, maxX, y, arr);

    addInnerWalls(newBoard, !horizontal, minX, maxX, minY, y - 1, arr);
    addInnerWalls(newBoard, !horizontal, minX, maxX, y + 1, maxY, arr);
  } else {
    if (maxY - minY < 2) return;

    const x = Math.floor(getRandomNumber(minX, maxX) / 2) * 2;
    addVerticalWall(newBoard, minY, maxY, x, arr);

    addInnerWalls(newBoard, !horizontal, minX, x - 1, minY, maxY, arr);
    addInnerWalls(newBoard, !horizontal, x + 1, maxX, minY, maxY, arr);
  }
};

const addHorizontalWall = (newBoard, minX, maxX, y, arr) => {
  const hole = Math.floor(getRandomNumber(minX, maxX) / 2) * 2 + 1;

  for (let i = minX; i <= maxX; i++) {
    if (i === hole || newBoard[y][i].isEnd) newBoard[y][i].isWall = false;
    else if (!isStartOrEnd(newBoard, y, i)) {
        newBoard[y][i].isWall = true;
        arr.push(newBoard[y][i]);
      }
  }
};

const addVerticalWall = (newBoard, minY, maxY, x, arr) => {
  const hole = Math.floor(getRandomNumber(minY, maxY) / 2) * 2 + 1;

  for (let i = minY; i <= maxY; i++) {
    if (i === hole || newBoard[i][x].isEnd) newBoard[i][x].isWall = false;
    else if (!isStartOrEnd(newBoard, i, x)) {
        newBoard[i][x].isWall = true;
        arr.push(newBoard[i][x]);
      }
  }
};

const isStartOrEnd = (board, row, col) =>
  board[row][col].isStart || board[row][col].isEnd;

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default recursiveDivision;
