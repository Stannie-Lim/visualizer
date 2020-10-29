import { getShortestPath } from "./shared";
import { MaxHeap } from "../../utils/MaxHeap";
import { animatePath } from "../../animate/animatePath";

const dijkstras = (board, setBoard, start, end) => {
  const path = getPath(board, start, end);
  animatePath(board, setBoard, path, VISIT);

  const endingNode = board[end[0]][end[1]];
  const shortestPath = getShortestPath(endingNode);
  animatePath(board, setBoard, shortestPath, PATH, path.length);
};

const getPath = (_board, [startRow, startCol], [endRow, endCol]) => {
  const board = [..._board];
  const path = [];

  const startNode = board[startRow][startCol];
  const endNode = board[endRow][endCol];

  startNode.distance = 0;
  const unvisited = getAllNodes(board);

  while (unvisited.length) {
    unvisited.sort((a, b) => a.distance - b.distance);
    const closest = unvisited.shift();
    if (closest.isWall) continue;
    if (closest.distance === Infinity) return path;
    closest.isVisited = true;
    path.push(closest);
    if (closest === endNode) return path;
    updateUnvisited(closest, board);
  }

  // const distances = {};
  // const maxHeap = new MaxHeap();
  // const previousNodes = {};

  // const startingNode = board[startRow][startCol];
  // distances[startingNode] = 0;

  // maxHeap.insert({ node: startingNode, distance: 0 });
  // console.log(maxHeap);

  // while(maxHeap.size) {
  //   const shortest = maxHeap.remove();
  //   console.log(shortest);
  // }
};

const updateUnvisited = (node, board) => {
  const unvisited = getUnvisitedNeighbors(node, board);
  for (const neighbor of unvisited) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
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
      allNodes.push(node);
    }
  }
  return allNodes;
};

export default dijkstras;
