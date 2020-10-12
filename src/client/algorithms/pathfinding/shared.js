const checkWithinBounds = (board, row, col) => {
  const ROW_SIZE = board.length;
  const COL_SIZE = board[0].length;
  return row >= 0 && row < ROW_SIZE && col >= 0 && col < COL_SIZE;
};

const getAdjacents = (board, row, col) => {
  const neighbors = [];
  if (
    checkWithinBounds(board, row - 1, col) &&
    !board[row - 1][col].visited &&
    !board[row - 1][col].isWall
  ) {
    neighbors.push(board[row - 1][col]);
  }
  if (
    checkWithinBounds(board, row, col + 1) &&
    !board[row][col + 1].visited &&
    !board[row][col + 1].isWall
  ) {
    neighbors.push(board[row][col + 1]);
  }
  if (
    checkWithinBounds(board, row + 1, col) &&
    !board[row + 1][col].visited &&
    !board[row + 1][col].isWall
  ) {
    neighbors.push(board[row + 1][col]);
  }
  if (
    checkWithinBounds(board, row, col - 1) &&
    !board[row][col - 1].visited &&
    !board[row][col - 1].isWall
  ) {
    neighbors.push(board[row][col - 1]);
  }
  return neighbors;
};

const getShortestPath = (endingNode) => {
  const shortestPath = [];

  let current = endingNode;
  while (current) {
    shortestPath.unshift(current);
    current = current.previous;
  }

  return shortestPath;
};

export { getAdjacents, getShortestPath };
