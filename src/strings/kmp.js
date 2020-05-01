function computePiTable(pattern) {
  const prefixArr = Array(pattern.length).fill(0);
  let j = 0;

  for (let i = 1; i < pattern.length; i++) {
    while (j > 0 && pattern.charAt(j) !== pattern.charAt(i)) {
      j = prefixArr[j - 1];
    }
    if (pattern.charAt(j) === pattern.charAt(i)) {
      j++;
    }
    prefixArr[i] = j;
  }
  return prefixArr;
}

const string = "ababcabcabababd";
const pattern = "ababd";

function search(string, pattern) {
  const prefixArr = computePiTable(pattern);
  let j = 0;
  for (let i = 0; i < string.length; i++) {
    if (j === pattern.length - 1) {
      return true;
    }
    if (string.charAt(i) === pattern.charAt(j)) {
      j++;
    } else {
      j = prefixArr[j];
    }
  }
  return false;
}

console.log("kmp found it", computePiTable("ababbab"));
console.log("kmp found", search("i can find a needle in a haystack", "needle"));
