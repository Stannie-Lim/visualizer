import { MaxHeap } from "../../utils/MaxHeap";

const dijkstras = (board, setBoard, start, end) => {
  const path = getPath(board, start);
};

const getPath = (_board, [startRow, startCol]) => {
  const board = [..._board];
  const path = [];

  const distances = {};
  const maxHeap = new MaxHeap();
  const previousNodes = {};

  const startingNode = board[startRow][startCol];
  distances[startingNode] = 0;

  maxHeap.insert({ node: startingNode, distance: 0 });
  console.log(maxHeap);
};

export default dijkstras;
