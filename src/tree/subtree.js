import Queue from "../Queue/queue";

/**
 Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values
with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. 
The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2

  */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function isSubTree(s, t) {
  if (!s || !t) {
    return false;
  }
  const mainTree = findNode(s, t.val);
  if (!mainTree) {
    return false;
  }
  return hasSameNodes(mainTree, t);
}

function hasSameNodes(tree, subtree) {
  if (tree && subtree) {
    if (tree.val !== subtree.val) {
      return false;
    }
    if (!tree.left) {
      return hasSameNodes(tree.right, subtree.right);
    } else if (!tree.right) {
      return hasSameNodes(tree.right, subtree.right);
    } else {
      return (
        hasSameNodes(tree.left, subtree.left) &&
        hasSameNodes(tree.right, subtree.right)
      );
    }
  }

  return true;
}

function findNode(tree, node) {
  const queue = new Queue();
  queue.enqueue(tree);

  while (queue.size) {
    const elm = queue.dequeue();
    if (elm && elm.val === node) {
      return elm;
    } else if (elm) {
      queue.enqueue(elm.left);
      queue.enqueue(elm.right);
    }
  }
  return null;
}

const tree = new TreeNode(3);
tree.right = new TreeNode(5);
const left = new TreeNode(4);
left.left = new TreeNode(1);
left.right = new TreeNode(2);
tree.left = left;

const newTree = { ...left };
newTree.right = new TreeNode(3);
console.log(newTree);

console.log(isSubTree(tree, new TreeNode(null)));
