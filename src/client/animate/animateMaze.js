const animateMaze = (order, setBoard, newBoard) => {
  for (let i = 0; i < order.length; i++) {
    const node = order[i];
    setTimeout(() => {
      wall(node);
    }, 10 * i);
  }

  setTimeout(() => {
    setBoard(newBoard);
  }, 10 * order.length);
};

const wall = (node) => {
  document.querySelector(`#node-${node.row}-${node.col}`).classList.add("wall");
};

export { animateMaze };
