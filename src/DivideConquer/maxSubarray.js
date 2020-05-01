function findMaxSubArray(arr, low, high) {
  if (low === high) {
    return [low, high, arr[low]];
  } else {
    const midPoint = Math.round((low + high) / 2);
    const [leftLow, leftHigh, leftSum] = findMaxSubArray(
      arr,
      low,
      midPoint - 1
    );

    const [rightLow, rightHigh, rightSum] = findMaxSubArray(
      arr,
      midPoint + 1,
      high
    );
    const [crossLow, crossHigh, crossSum] = findMaxCrossing(
      arr,
      low,
      midPoint,
      high
    );

    if (leftSum >= rightSum && leftSum >= crossSum) {
      return [leftLow, leftHigh, leftSum];
    } else if (rightSum >= leftSum && rightSum >= crossSum) {
      return [rightLow, rightHigh, rightSum];
    }
    return [crossLow, crossHigh, crossSum];
  }
}

function findMaxCrossing(arr, low, midPoint, high) {
  let leftSum = -Infinity;
  let rightSum = -Infinity;
  let sum = 0;
  let maxLeft;
  let maxRight;
  for (let i = midPoint; i >= low; i--) {
    sum = sum + arr[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }
  sum = 0;

  for (let j = midPoint + 1; j <= high; j++) {
    sum = sum + arr[j];
    if (sum > rightSum) {
      rightSum = sum;
      maxRight = j;
    }
  }
  return [maxLeft, maxRight, leftSum + rightSum];
}

const arr = [-1, 3, 4, -5, 9, -2];

console.log(findMaxSubArray(arr, 0, arr.length));
