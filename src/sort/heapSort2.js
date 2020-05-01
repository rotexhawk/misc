const maxHeapify = (a, n, i) => {
  let largest = i;
  // we inc left and right by one because we are only
  //checking for < and not <= in conditions below.
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  while (l < n && a[l] > a[largest]) {
    largest = l;
  }

  while (r < n && a[r] > a[largest]) {
    largest = r;
  }

  if (largest !== i) {
    const temp = a[largest];
    a[largest] = a[i];
    a[i] = temp;
    maxHeapify(a, n, largest);
  }
  return a;
};

const build_maxheap = arr => {
  const n = arr.length;
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    arr = maxHeapify(arr, n, i);
  }
  return arr;
};

const heap_sort = arr => {
  let n = arr.length;
  arr = build_maxheap(arr);

  for (let i = n - 1; i >= 0; i--) {
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    arr = maxHeapify(arr, i, 0);
  }

  return arr;
};

const arr = [10, 20, 15, 30, 40];
console.log("return", heap_sort(arr));
