function survival(arr, k) {
  let pos = 0;
  let count = 0;
  while (arr.length > 1) {
    if (count < k) {
      count++;
      pos++;
      if (pos > arr.length) {
        pos = 0;
      }
    }
    if (count === k) {
      console.log("removing elm", pos - 1, arr[pos - 1]);
      arr.splice(pos - 1, 1);
      console.log(JSON.stringify(arr));

      count = 0;
    }
  }
  console.log("wtf", arr);
  return arr[0];
}

console.log(survival([1, 2, 3, 4, 5], 2));
