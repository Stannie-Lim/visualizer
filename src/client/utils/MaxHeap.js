export class MaxHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  buildHeap(array) {
    const firstParent = Math.floor((array.length - 2) / 2);
    for (let i = firstParent; i >= 0; i--)
      this.siftDown(i, array.length - 1, array);
    return array;
  }

  siftDown(start, end, heap) {
    this.size--;
    let firstChildIndex = start * 2 + 1;
    while (firstChildIndex <= end) {
      const secondChildIndex = start * 2 + 2 <= end ? start * 2 + 2 : -1;
      let swapIndex;
      if (
        secondChildIndex !== -1 &&
        heap[secondChildIndex].distance > heap[firstChildIndex].distance
      ) {
        swapIndex = secondChildIndex;
      } else {
        swapIndex = firstChildIndex;
      }

      if (heap[swapIndex].distance > heap[start].distance) {
        [heap[start], heap[swapIndex]] = [heap[swapIndex], heap[start]];
        start = swapIndex;
        firstChildIndex = start * 2 + 1;
      } else return;
    }
  }

  siftUp(index, heap) {
    this.size++;
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && heap[index].distance > heap[parent].distance) {
      [heap[index], heap[parent]] = [heap[parent], heap[index]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    [this.heap[this.heap.length - 1], this.heap[0]] = [
      this.heap[0],
      this.heap[this.heap.length - 1],
    ];
    const remove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return remove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
}
