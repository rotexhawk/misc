const arr = [10, 20, 15, 30, 40];

const createMaxHeap = arr => {
  let newArr = [];
  newArr[1] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
    newArr = shiftElms(newArr, i + 1);
  }
  return newArr.slice(1);
};

const shiftElms = (arr, i) => {
  let currIndex = i;
  let parentIndex = Math.floor(i / 2);

  while (arr[currIndex] > arr[parentIndex]) {
    const temp = arr[parentIndex];
    arr[parentIndex] = arr[currIndex];
    arr[currIndex] = temp;
    currIndex = parentIndex;
    parentIndex = Math.floor(currIndex / 2);
  }
  return arr;
};
function shiftDownwards(arr) {
  let beginIndex = 0;
  let leftChild = 1;
  let rightChild = 2;

  while (
    arr[beginIndex] < arr[leftChild] ||
    arr[beginIndex] <= arr[rightChild]
  ) {
    const temp = arr[beginIndex];
    if (arr[beginIndex] < arr[leftChild]) {
      arr[beginIndex] = arr[leftChild];
      arr[leftChild] = temp;
    } else if (arr[beginIndex] < arr[rightChild]) {
      arr[beginIndex] = arr[rightChild];
      arr[rightChild] = temp;
    }
    leftChild *= 2;
    rightChild = rightChild * 2 + 1;
  }

  return arr;
}

const heapSort = arr => {
  let maxHeap = createMaxHeap(arr);
  const retArr = [];
  while (maxHeap.length > 1) {
    const lastElm = maxHeap.pop();
    retArr.unshift(maxHeap.shift());
    maxHeap = shiftDownwards([lastElm, ...maxHeap]);
  }

  return [maxHeap[0], ...retArr];
};
console.log(createMaxHeap(arr));

console.log(heapSort(arr));
