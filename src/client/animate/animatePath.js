const animatePath = (
  order,
  shortestPath,
  time,
  speed,
  setTotalWeight = null,
  setTimer,
  totalTime
) => {
  for (let i = 0; i < order.length; i++) {
    const node = order[i];

    setTimeout(() => {
      visit(node);
    }, speed * i);
  }

  for (let i = 0; i < shortestPath.length; i++) {
    const node = shortestPath[i];

    setTimeout(() => {
      path(node);
    }, speed * (i + time));
  }

  setTimeout(() => {
    if (setTotalWeight) {
      setTotalWeight(shortestPath[shortestPath.length - 1].distance);
    }
    setTimer(totalTime.toFixed(2));
  }, speed * (shortestPath.length + time));

  if (order.length === 0 || !order[order.length - 1].isEnd)
    throw "No valid path";
};

const visit = (node) =>
  node.isStart || node.isEnd
    ? ""
    : document
        .querySelector(`#node-${node.row}-${node.col}`)
        .classList.add("visited");

const path = (node) =>
  node.isStart || node.isEnd
    ? ""
    : document
        .querySelector(`#node-${node.row}-${node.col}`)
        .classList.add("path");

export { animatePath };
