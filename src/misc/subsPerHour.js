// Given an array of numbers N and an integer b, your task is to split N into b partitions
// such that the maximum sum of any partition is minimized. Return this sum.

// For example, given N = [5, 1, 2, 7, 3, 4] and b = 3, you should return 8,
// since the optimal partition is [5, 1, 2], [7], [3, 4].

// max sum of each partition is minimized, // b partions

// [7,5,4,3,2,1] -> 3
// [7], [5], [4]  ->

function sum(arr, i = 0) {
  return arr.reduce((acc, curr) => acc + curr, i);
}

function tail(arr) {
  const [_, ...tail] = arr;
  return tail;
}

function head(arr) {
  const [head, ..._] = arr;
  return head;
}

function getIndexWithSmallestSum(twoDimArr) {
  let min = sum(twoDimArr[0]);
  let count = 0;
  for (let i = 1; i < twoDimArr.length; i++) {
    if (sum(twoDimArr[i]) < min) {
      min = sum(twoDimArr[i]);
      count += i;
    }
  }

  return count === twoDimArr.length ? count - 1 : count;
}

function partionWithMinSum(array, numPartion) {
  function minArrsIter(arr, acc) {
    if (!arr || !arr.length) {
      return acc;
    }
    const elm = head(arr);
    let index = getIndexWithSmallestSum(acc);
    acc[index] = acc[index].concat([elm]);
    return minArrsIter(tail(arr), acc);
  }

  return minArrsIter(
    [...array.sort((left, right) => right - left)], // n * log(n)
    new Array(numPartion).fill([])
  );
}

let partions = partionWithMinSum([1, 2, 3, 4, 5, 6, 9, 11], 3);
console.log("partions", partions);
