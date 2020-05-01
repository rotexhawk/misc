// const str = "bannana";
// const text = str.split("");

// // The sorted suffix array values.
// const suffixArray = buildSuffixArray(str);

function buildSuffixArray(str) {
  let suffixArr = [];
  let i = str.length - 1;
  let acc = [];
  for (let j = 0; j < str.length; j++) {
    console.log(str.substring(i - j));
    acc.push(str.substring(i - j));
  }
  suffixArr = [...suffixArr, ...acc];

  return suffixArr;
}

function kasai(suffixsLength, suffixArray, text) {
  const lcp = new Array(suffixsLength);
  const inv = new Array(suffixsLength);

  for (let i = 0; i < suffixsLength; i++) {
    inv[suffixArray[i]] = i;
    let len = 0;
    for (let j = 0; j < suffixsLength; j++) {
      if (inv[i] > 0) {
        const k = suffixArray[inv[j] - 1];
        while (
          j + len < suffixsLength &&
          k + len < suffixsLength &&
          text[j + len] === text[k + len]
        ) {
          len++;
          lcp[inv[j]] = len;
          if (len > 0) {
            len--;
          }
        }
      }
      len++;
    }
  }
}
