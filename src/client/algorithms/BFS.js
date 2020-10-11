const bfs = (board, setBoard, start, end) => {
  const path = getPath(board, start);
  animate(board, setBoard, path);

  const endingNode = board[end[0]][end[1]];
  const shortestPath = getShortestPath(endingNode);
  animate(board, setBoard, shortestPath, path.length);
};

const getPath = (_board, start) => {
  const board = [..._board];
  const path = [];

  const startingNode = board[start[0]][start[1]];

  const queue = [startingNode];

  while (queue.length) {
    const node = queue.shift();
    const { row, col, isEnd, isWall, visited } = node;
    if (visited || isWall) continue;

    path.push(node);
    board[row][col].visited = true;
    if (isEnd) break;

    const neighbors = getAdjacents(board, row, col);
    for (const neighbor of neighbors) {
      neighbor.previous = node;
      queue.push(neighbor);
    }
  }

  return path;
};

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
      time ? 100 * (i + time) : 100 * i
    );
  }
};

export default bfs;
