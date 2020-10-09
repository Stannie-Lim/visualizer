function checkWithinBounds(board, row, col) {
  const ROW_SIZE = board.length;
  const COL_SIZE = board[0].length;
  return row >= 0 && row < ROW_SIZE && col >= 0 && col < COL_SIZE;
}

const getAdjacents = (board, row, col) => {
  const neighbors = [];
  if (
    checkWithinBounds(board, row - 1, col - 1) &&
    board[row - 1][col - 1] !== "lightblue" &&
    board[row - 1][col - 1] !== "black"
  ) {
    neighbors.push([row - 1, col - 1]);
  }
  if (
    checkWithinBounds(board, row - 1, col) &&
    board[row - 1][col] !== "lightblue" &&
    board[row - 1][col] !== "black"
  ) {
    neighbors.push([row - 1, col]);
  }
  if (
    checkWithinBounds(board, row - 1, col + 1) &&
    board[row - 1][col + 1] !== "lightblue" &&
    board[row - 1][col + 1] !== "black"
  ) {
    neighbors.push([row - 1, col + 1]);
  }
  if (
    checkWithinBounds(board, row, col + 1) &&
    board[row][col + 1] !== "lightblue" &&
    board[row][col + 1] !== "black"
  ) {
    neighbors.push([row, col + 1]);
  }
  if (
    checkWithinBounds(board, row + 1, col + 1) &&
    board[row + 1][col + 1] !== "lightblue" &&
    board[row + 1][col + 1] !== "black"
  ) {
    neighbors.push([row + 1, col + 1]);
  }
  if (
    checkWithinBounds(board, row + 1, col) &&
    board[row + 1][col] !== "lightblue" &&
    board[row + 1][col] !== "black"
  ) {
    neighbors.push([row + 1, col]);
  }
  if (
    checkWithinBounds(board, row + 1, col - 1) &&
    board[row + 1][col - 1] !== "lightblue" &&
    board[row + 1][col - 1] !== "black"
  ) {
    neighbors.push([row + 1, col - 1]);
  }
  if (
    checkWithinBounds(board, row, col - 1) &&
    board[row][col - 1] !== "lightblue" &&
    board[row][col - 1] !== "black"
  ) {
    neighbors.push([row, col - 1]);
  }
  return neighbors;
};

const BFS = (board, setBoard, start, end) => {
  const path = [];

  const queue = [start];
  while (queue.length) {
    const { length } = queue;
    const update = [];
    for (let i = 0; i < length; i++) {
      const [row, col] = queue.shift();

      update.push([row, col]);
      if (i === length - 1) {
        const newBoard = [...board];
        for (const [_row, _col] of update) {
          if (
            (_row !== start[0] || _col !== start[1]) &&
            (_row !== end[0] || _col !== end[1])
          )
            newBoard[_row][_col] = "lightblue";
        }
        setBoard(newBoard);

        for (const [_row, _col] of update) {
          if (_row === end[0] && _col === end[1]) {
            console.log(path);
            console.log(`found at ${_row} ${_col}`);
            return;
          }
        }
      }

      const neighbors = getAdjacents(board, row, col);
      for (const [neighborRow, neighborCol] of neighbors) {
        queue.push([neighborRow, neighborCol]);
      }
    }
  }
};

export default BFS;
