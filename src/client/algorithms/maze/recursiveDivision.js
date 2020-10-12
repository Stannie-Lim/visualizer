import { makeArray } from "../../utils/common";

function recursiveDivision(board, setBoard, STARTPOINT, ENDPOINT) {
  const [rows, cols] = [board.length, board[0].length];

  const newBoard = makeArray(rows, cols, STARTPOINT, ENDPOINT);

  addOuterWalls(newBoard, rows, cols);
  addInnerWalls(newBoard, true, 1, cols - 2, 1, rows - 2);

  setBoard(newBoard);
}

const addOuterWalls = (newBoard, rows, cols) => {
  for (let i = 0; i < rows; i++) {
    if (i === 0 || i === rows - 1) {
      for (let j = 0; j < cols; j++) {
        newBoard[i][j].isWall = true;
      }
    } else {
      newBoard[i][0].isWall = true;
      newBoard[i][cols - 1].isWall = true;
    }
  }
};

const addInnerWalls = (newBoard, horizontal, minX, maxX, minY, maxY) => {
  if (horizontal) {
    if (maxX - minX < 2) return;

    const y = Math.floor(getRandomNumber(minY, maxY) / 2) * 2;
    addHorizontalWall(newBoard, minX, maxX, y);

    addInnerWalls(newBoard, !horizontal, minX, maxX, minY, y - 1);
    addInnerWalls(newBoard, !horizontal, minX, maxX, y + 1, maxY);
  } else {
    if (maxY - minY < 2) return;

    const x = Math.floor(getRandomNumber(minX, maxX) / 2) * 2;
    addVerticalWall(newBoard, minY, maxY, x);

    addInnerWalls(newBoard, !horizontal, minX, x - 1, minY, maxY);
    addInnerWalls(newBoard, !horizontal, x + 1, maxX, minY, maxY);
  }
};

const addHorizontalWall = (newBoard, minX, maxX, y) => {
  const hole = Math.floor(getRandomNumber(minX, maxX) / 2) * 2 + 1;

  for (let i = minX; i <= maxX; i++) {
    if (i === hole || newBoard[y][i].isEnd) newBoard[y][i].isWall = false;
    else newBoard[y][i].isWall = true;
  }
};

const addVerticalWall = (newBoard, minY, maxY, x) => {
  const hole = Math.floor(getRandomNumber(minY, maxY) / 2) * 2 + 1;

  for (let i = minY; i <= maxY; i++) {
    if (i === hole || newBoard[i][x].isEnd) newBoard[i][x].isWall = false;
    else newBoard[i][x].isWall = true;
  }
};

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default recursiveDivision;
