/**
In Ancient Greece, it was common to write text with the first line going left to right, 
the second line going right to left, and continuing to go back and forth. This style was called "boustrophedon".

Given a binary tree, write an algorithm to print the nodes in boustrophedon order.

For example, given the following tree:

       1
    /     \
  2         3
 / \       / \
4   5     6   7
You should return [1, 3, 2, 4, 5, 6, 7].

 */

import { BinaryTree } from "./binaryTree";
import Queue from "../Queue/queue";

const tree = new BinaryTree(1);
const leftNode = tree.setLeft(2);
const rightNode = tree.setRight(3);

const leftLeftNode = leftNode.setLeft(4);
const leftLeftRight = leftNode.setRight(5);

leftLeftNode.setLeft(8);
leftLeftNode.setRight(9);

leftLeftRight.setLeft(10);
leftLeftRight.setRight(11);

const rightLeft = rightNode.setLeft(6);
rightNode.setRight(7);

rightLeft.setLeft(12);
rightLeft.setRight(13);

console.log("tree", tree);

function boustrophedon(tree) {
  const queue = new Queue();
  queue.enqueue(tree);

  let isEven = false;

  while (queue.size > 0) {
    const elm = queue.dequeue();
    if (elm) {
      if (isEven) {
        const nextElm = queue.dequeue();
        console.log(elm.getValue());
        if (nextElm) {
          console.log(nextElm.getValue());
          queue.enqueue(nextElm.getLeft());
          queue.enqueue(nextElm.getRight());
          queue.enqueue(elm.getLeft());
          queue.enqueue(elm.getRight());
        }
      } else {
        const nextElm = queue.dequeue();
        console.log(elm.getValue());
        if (nextElm) {
          console.log(nextElm.getValue());
          queue.enqueue(nextElm.getRight());
          queue.enqueue(nextElm.getLeft());
          queue.enqueue(elm.getRight());
          queue.enqueue(elm.getLeft());
        } else {
          queue.enqueue(elm.getRight());
          queue.enqueue(elm.getLeft());
        }
      }
    }
    isEven = !isEven;
  }
}

// boustrophedon(tree);
breadPrinth(tree);

function breadPrinth(tree) {
  const queue = new Queue();
  queue.enqueue(tree);

  while (queue.size > 0) {
    const elm = queue.dequeue();
    if (elm) {
      console.log(elm.getValue());
      queue.enqueue(elm.getLeft());
      queue.enqueue(elm.getRight());
    }
  }
}
// InOrderTraversal(tree)
