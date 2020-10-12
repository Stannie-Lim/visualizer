const makeArray = (rSize, cSize, STARTPOINT, ENDPOINT) => {
  const newBoard = [];
  for (let row = 0; row < rSize; row++) {
    const arr = [];
    for (let col = 0; col < cSize; col++) {
      const node = {
        row,
        col,
        isStart: row === STARTPOINT[0] && col === STARTPOINT[1],
        isEnd: row === ENDPOINT[0] && col === ENDPOINT[1],
        isWall: false,
        isVisited: false,
        isPath: false,
      };
      arr.push(node);
    }
    newBoard.push(arr);
  }
  return newBoard;
};

export { makeArray };
