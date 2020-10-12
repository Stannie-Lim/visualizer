import { VISIT, PATH, WALL } from "../utils/constants";

const animate = (board, setBoard, order, type, time = 1) => {
  let animationTime;

  for (let i = 0; i < order.length; i++) {
    setTimeout(() => {
      const node = order[i];
      const newBoard = [...board];

      let newNode;
      switch (type) {
        case VISIT:
          newNode = {
            ...node,
            isVisited: true,
          };
          animationTime = 75 * (i + time);
          break;
        case PATH:
          newNode = {
            ...node,
            isPath: true,
          };
          animationTime = 75 * (i + time);
          break;
        case WALL:
          newNode = {
            ...node,
            isWall: true,
          };
          animationTime = 25 * i;
          break;
      }

      newBoard[node.row][node.col] = newNode;
      setBoard(newBoard);
    }, animationTime);
  }

  if (type === VISIT || type === PATH) {
    if (order.length === 0 || !order[order.length - 1].isEnd)
      throw "No valid path";
  }
};

export { animate };
