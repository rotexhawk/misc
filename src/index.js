// function cellCompete(states, days) {
//   const beginIndex = 0;
//   const endIndex = 0;
//   const returnStates = [];
//   for (let d = 0; d <= days; d++) {
//     const accState = [...states];
//     for (let j = 0; j < states.length; j++) {
//       returnStates[j] = adjacentState(accState, j);
//     }
//     states = [...accState];
//   }
//   return returnStates;
// }

// function adjacentState(states, index) {
//   if (index < 0) {
//     if (states[index + 1] === 0) {
//       return 0;
//     }
//     return 1;
//   }
//   if (index === states.length - 1) {
//     if (states[index - 1] === 0) {
//       return 0;
//     }
//     return 1;
//   }
//   if (states[index - 1] === 0 && states[index + 1] === 0) {
//     return 0;
//   } else if (states[index - 1] === 1 && states[index + 1] === 1) {
//     return 0;
//   }
//   return 1;
// }

// function climbingStairs(n) {
//   function climibingIter(n, acc) {
//     if (n <= 2) {
//       return n;
//     } else {
//       if (!acc[n - 1]) {
//         acc[n - 1] = climibingIter(n - 1, acc);
//       }
//       if (!acc[n - 2]) {
//         acc[n - 2] = climibingIter(n - 2, acc);
//       }
//       return acc[n - 1] + acc[n - 2];
//     }
//   }
//   return climibingIter(n, {});
// }

// // def sequence[A](a: List[Option[A]]): Option[List[A]] = a match {
// //   case Nil => Some(Nil)
// //   case x :: xs => x flatMap(y => sequence(xs) map(y :: _))
// // }

// var maxProduct = function(nums) {
//   let totalMax = nums[0];
//   let currentMax = 1;

//   for (let i = 0; i < nums.length; i++) {
//     currentMax = currentMax * nums[i];
//     totalMax = Math.max(totalMax, Math.max(nums[i], currentMax));
//     if (currentMax === 0) {
//       currentMax = 1;
//     }
//   }

//   currentMax = 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     currentMax = currentMax * nums[i];
//     totalMax = Math.max(totalMax, Math.max(nums[i], currentMax));

//     if (currentMax === 0) {
//       currentMax = 1;
//     }
//   }

//   return totalMax;
// };

// function numberOfValidPlayListsRec(required, downloaded, buffer) {
//   if (buffer >= downloaded) {
//     return 0;
//   }

//   if (required == 0) {
//     return 1;
//   }

//   return (
//     downloaded *
//     numberOfValidPlayListsRec(
//       required - 1,
//       buffer == 0 ? downloaded : downloaded - 1,
//       Math.max(0, buffer - 1)
//     )
//   );
// }

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree = new TreeNode(1);

let left = new TreeNode(2);
let leftLeft = new TreeNode(4);
let leftRight = new TreeNode(5);

left.left = leftLeft;
left.right = leftRight;

let right = new TreeNode(3);
let right1 = new TreeNode(6);
let right2 = new TreeNode(9);
let right3 = new TreeNode(10);

right.right = right1;
right1.right = right2;
right2.right = right3;

tree.left = left;
tree.right = right;
/*
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(tree) {
  function iter(root, val) {
    console.log("root", root);
    if (!root) {
      return val;
    } else {
      let leftMax = iter(root.left, root.val);
      let rightMax = iter(root.right, root.val);

      console.log("leftMax", leftMax);
      console.log("rightMax", rightMax);
    }
  }
  return iter(tree, null);
};

console.log(deepestLeavesSum(tree));
