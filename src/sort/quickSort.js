function quickSort(arr) {
  function partition(beg, end) {
    let x = arr[end];
    let i = beg - 1;

    for (let j = beg; j <= end - 1; j++) {
      if (arr[j] <= x) {
        i = i + 1;
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    const temp = arr[i + 1];
    arr[i + 1] = arr[end];
    arr[end] = temp;
    return i + 1;
  }

  function quickIter(beg, end) {
    if (beg < end) {
      let q = partition(beg, end);
      quickIter(beg, q - 1);
      quickIter(q + 1, end);
    }
  }

  quickIter(0, arr.length - 1);
  return arr;
}

let sorted = quickSort([2, 8, 7, 1, 3, 5, 6, 4]);

console.log("sorted", sorted);
