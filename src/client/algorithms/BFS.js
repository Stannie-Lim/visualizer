import { getAdjacents, getShortestPath, animate } from "./shared";

const bfs = (board, setBoard, start, end) => {
  const path = getPath(board, start);
  animate(board, setBoard, path);
  const endingNode = board[end[0]][end[1]];
  const shortestPath = getShortestPath(endingNode);
  animate(board, setBoard, shortestPath, path.length);

  if (path.length === 0 || !path[path.length - 1].isEnd) throw "No valid path";
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

export default bfs;
