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

const animate = (board, setBoard, order, time) => {
  for (let i = 0; i < order.length; i++) {
    setTimeout(
      () => {
        const node = order[i];
        const newBoard = [...board];
        let newNode;

        time
          ? (newNode = newNode = {
              ...node,
              isPath: true,
            })
          : (newNode = {
              ...node,
              isVisited: true,
            });

        newBoard[node.row][node.col] = newNode;
        setBoard(newBoard);
      },
      time ? 75 * (i + time) : 75 * i
    );
  }
};

export { getAdjacents, getShortestPath, animate };
