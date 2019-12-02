export const binarySearch = (toFind, list) => {
  if (!list || !list.length) {
    return -1;
  }
  const binarySearchInner = (needle, arr, acc) => {
    if (arr.length === 1) {
      if (arr[0] === needle) {
        return acc;
      } else return -1;
    }
    const midPoint = Math.ceil(arr.length / 2);

    const midElm = arr[midPoint];

    if (midElm > needle) {
      return binarySearchInner(needle, arr.slice(0, midPoint), acc);
    } else if (midElm < needle) {
      return binarySearchInner(
        needle,
        arr.slice(midPoint + 1),
        acc + midPoint + 1
      );
    }
    return acc + midPoint;
  };
  return binarySearchInner(toFind, list, 0);
};
