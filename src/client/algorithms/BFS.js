function checkWithinBounds(board, row, col) {
  const ROW_SIZE = board.length;
  const COL_SIZE = board[0].length;
  return row >= 0 && row < ROW_SIZE && col >= 0 && col < COL_SIZE;
}

const getAdjacents = (board, row, col) => {
  const neighbors = [];
  if (
    checkWithinBounds(board, row - 1, col - 1) &&
    !board[row - 1][col - 1].visited &&
    !board[row - 1][col - 1].isWall
  ) {
    neighbors.push(board[row - 1][col - 1]);
  }
  if (
    checkWithinBounds(board, row - 1, col) &&
    !board[row - 1][col].visited &&
    !board[row - 1][col].isWall
  ) {
    neighbors.push(board[row - 1][col]);
  }
  if (
    checkWithinBounds(board, row - 1, col + 1) &&
    !board[row - 1][col + 1].visited &&
    !board[row - 1][col + 1].isWall
  ) {
    neighbors.push(board[row - 1][col + 1]);
  }
  if (
    checkWithinBounds(board, row, col + 1) &&
    !board[row][col + 1].visited &&
    !board[row][col + 1].isWall
  ) {
    neighbors.push(board[row][col + 1]);
  }
  if (
    checkWithinBounds(board, row + 1, col + 1) &&
    !board[row + 1][col + 1].visited &&
    !board[row + 1][col + 1].isWall
  ) {
    neighbors.push(board[row + 1][col + 1]);
  }
  if (
    checkWithinBounds(board, row + 1, col) &&
    !board[row + 1][col].visited &&
    !board[row + 1][col].isWall
  ) {
    neighbors.push(board[row + 1][col]);
  }
  if (
    checkWithinBounds(board, row + 1, col - 1) &&
    !board[row + 1][col - 1].visited &&
    !board[row + 1][col - 1].isWall
  ) {
    neighbors.push(board[row + 1][col - 1]);
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

const BFS = (_board, setBoard, start) => {
  const board = [..._board];
  const path = [];

  const startingNode = board[start[0]][start[1]];
  const queue = [startingNode];

  while (queue.length) {
    const node = queue.shift();
    const { row, col, isEnd, isWall, visited } = node;
    if (visited) continue;

    path.push(node);
    board[row][col].visited = true;
    if (isEnd) break;

    const neighbors = getAdjacents(board, row, col);
    for (const neighbor of neighbors) {
      queue.push(neighbor);
    }
  }

  animate(_board, setBoard, path);
};

const animate = (board, setBoard, order) => {
  for (let i = 0; i < order.length; i++) {
    setTimeout(() => {
      const node = order[i];
      console.log(node);
      const newBoard = [...board];
      const newNode = {
        ...node,
        isVisited: true,
      };
      newBoard[node.row][node.col] = newNode;
      setBoard(newBoard);
    }, 50 * i);
  }
};

export default BFS;
