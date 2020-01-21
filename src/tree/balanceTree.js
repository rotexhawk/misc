class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function getHeight(tree){
  function heightIter(root, acc){
    if (!root || (!root.left && !root.right)){
      return acc; 
    } else if (root.left && root.right){
      return Math.max(heightIter(root.left, acc + 1), heightIter(root.right, acc + 1)) 
    } else if (!root.left){
      return heightIter(root.right, acc + 1); 
    } else if (!root.right){
      return heightIter(root.left, acc + 1); 
    } else {
      return acc; 
    }
  }
  console.log('trees to recurse', tree)
  return heightIter(tree, 0);
}

//A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.
function isBalanced(root) {
  function isBalancedIter(treeRoot, diff){
    if (!treeRoot || (!treeRoot.left && !treeRoot.right)){
      return diff 
    }
    if (treeRoot.left && treeRoot.right){
      const res = isBalancedIter(treeRoot.left, diff + 1) - isBalancedIter(treeRoot.right, diff + 1);
      return res === 0 || res === 1; 
    }
    else if (!treeRoot.left){
      return isBalancedIter(treeRoot.right, 0); 
    } else if (!treeRoot.right){
      return isBalancedIter(treeRoot.left, 0); 
    }
  }
  
  return isBalancedIter(root, 0, 0); 
  
}

let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(8);

treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(2);

leftNode.insertLeft(3);
leftNode.insertRight(7).insertRight(8);
treeRoot.insertRight(4).insertRight(5).insertRight(6).insertRight(9);




console.log(treeRoot)
const diff = getHeight(treeRoot.left) - getHeight(treeRoot.right);

console.log(Math.abs(diff) <= 1)