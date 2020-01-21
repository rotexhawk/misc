// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false

function balanceBrackets(str) {
  let openings = [];
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    if (["{", "[", "("].includes(char)) {
      openings.push(char);
    } else if (["}", "]", ")"].includes(char)) {
      let currOpening = openings.pop();
      if (
        (currOpening === "[" && char !== "]") ||
        (currOpening === "{" && char !== "}") ||
        (currOpening === "(" && char !== ")")
      ) {
        return false;
      }
    }
  }
  return openings.length === 0;
}

// console.log(balanceBrackets("{ [ ] ( ) }"));
// console.log(balanceBrackets("{ [ ( ] ) }"));
// console.log(balanceBrackets("{ [ }"));

// subset {1,2} ---> {}, {1}, {1,2}
// [1,2,3] => {}, {1}, {1,2}, {1,3}, {2,3}, {3}, {1,2,3}
function subset(mainSet) {
  function setIter(arr, acc) {
    if (!arr.length) {
      return acc;
    } else {
      const [head, ...tail] = arr;
      for (let i = 0; i < arr.length; i++) {
        const pair = new Set();
        pair.add(head);
        pair.add(arr[i]);
        acc.add(pair);
      }
      return setIter(tail, acc);
    }
  }
  return setIter(mainSet.entries(), new Set());
}

let set = new Set();
set.add(1);
set.add(2);
set.add(3);

let res = subset(set);

// set.delete(100);

console.log("wtf", res);
