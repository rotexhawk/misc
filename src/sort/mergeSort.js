export const mergeSort = arr => {
  const midpoint = Math.ceil(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  if (left.length <= 1 && right.length <= 1) {
    return mergeLists(left, right);
  }
  if (left.length <= 1) {
    return [...mergeLists(left, mergeSort(right))];
  }
  if (right.length <= 1) {
    return [...mergeLists(right, mergeSort(left))];
  }
  return mergeLists(mergeSort(left), mergeSort(right));
};

const mergeLists = (listA, listB) => {
  let [i, k, j] = [0, 0, 0];
  let sortedList = [];
  const maxLength = listA.length + listB.length;

  while (k < maxLength) {
    if (listA[i] <= listB[j]) {
      sortedList[k] = listA[i];
      i++;
      k++;
    } else {
      if (j === listB.length) {
        return [...sortedList, ...listA.slice(i)];
      }
      sortedList[k] = listB[j];
      j++;
      k++;
    }
  }

  return sortedList;
};
