import { getShortestPath, measurePerformance } from "./shared";
import { animatePath } from "../../animate/animatePath";

const dijkstras = (
  board,
  setBoard,
  start,
  end,
  speed,
  setTotalWeight,
  setTimer
) => {
  const [path, totalTime] = measurePerformance(getPath, board, start, end);

  const endingNode = board[end[0]][end[1]];
  const shortestPath = getShortestPath(endingNode);
  animatePath(
    path,
    shortestPath,
    path.length,
    speed,
    setTotalWeight,
    setTimer,
    totalTime
  );
};

const getPath = (_board, [startRow, startCol], [endRow, endCol]) => {
  const board = [..._board];
  const path = [];

  const startNode = board[startRow][startCol];
  const endNode = board[endRow][endCol];

  const unvisited = getAllNodes(board);
  startNode.distance = 0;

  while (unvisited.length) {
    unvisited.sort((a, b) => a.distance - b.distance);
    const closest = unvisited.shift();
    const { row, col } = closest;
    if (
      closest.isWall ||
      document.querySelector(`#node-${row}-${col}`).classList.contains("wall")
    )
      continue;
    if (closest.distance === Infinity) return path;
    closest.isVisited = true;
    path.push(closest);
    if (closest === endNode) return path;
    updateUnvisited(closest, board);
  }
};

const updateUnvisited = (node, board) => {
  const unvisited = getUnvisitedNeighbors(node, board);
  for (const neighbor of unvisited) {
    neighbor.distance = node.distance + node.weight;
    neighbor.previous = node;
  }
};

const getUnvisitedNeighbors = ({ row, col }, board) => {
  const neighbors = [];
  if (row > 0 && !isVisited(board, row - 1, col))
    neighbors.push(board[row - 1][col]);
  if (row < board.length - 1 && !isVisited(board, row + 1, col))
    neighbors.push(board[row + 1][col]);
  if (col > 0 && !isVisited(board, row, col - 1))
    neighbors.push(board[row][col - 1]);
  if (col < board[0].length - 1 && !isVisited(board, row, col + 1))
    neighbors.push(board[row][col + 1]);
  return neighbors;
};

const isVisited = (board, row, col) => board[row][col].isVisited;

const getAllNodes = (board) => {
  const allNodes = [];
  for (const row of board) {
    for (const node of row) {
      node.distance = Infinity;
      allNodes.push(node);
    }
  }
  return allNodes;
};

export default dijkstras;
