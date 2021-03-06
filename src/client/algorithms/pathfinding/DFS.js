import { animatePath } from "../../animate/animatePath";
import { getAdjacents, getShortestPath, measurePerformance } from "./shared";

const dfs = (board, setBoard, start, end, speed, setTimer) => {
  const [path, totalTime] = measurePerformance(getPath, board, start);

  const endingNode = board[end[0]][end[1]];
  const shortestPath = getShortestPath(endingNode);
  animatePath(
    path,
    shortestPath,
    path.length,
    speed,
    null,
    setTimer,
    totalTime
  );
};

const getPath = (_board, start) => {
  const board = [..._board];
  const path = [];

  const startingNode = board[start[0]][start[1]];

  const stack = [startingNode];

  while (stack.length) {
    const node = stack.pop();
    const { row, col, isEnd, isWall, visited } = node;
    if (
      visited ||
      document.querySelector(`#node-${row}-${col}`).classList.contains("wall")
    )
      continue;

    path.push(node);
    board[row][col].visited = true;
    if (isEnd) break;

    const neighbors = getAdjacents(board, row, col);
    for (const neighbor of neighbors) {
      neighbor.previous = node;
      stack.push(neighbor);
    }
  }

  return path;
};

export default dfs;
