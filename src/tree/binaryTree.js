import Queue from "../Queue/queue";

export class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    this.value = value;
    return this;
  }

  setLeft(value) {
    if (this.left) {
      this.left.setLeft(value);
      return this.left;
    }
    this.left = new Node(value);
    return this.left;
  }

  setRight(value) {
    if (this.right) {
      this.right.setRight(value);
      return this.right;
    }
    this.right = new Node(value);
    return this.right;
  }
  getLeft() {
    return this.left;
  }
  getRight() {
    return this.right;
  }
  getValue() {
    return this.value;
  }
}

export class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node();
      return this.root;
    } else if (!this.root.value) {
      this.root.value = value;
      return this.root;
    } else {
      return this.root.insert(value);
    }
  }

  setLeft(value) {
    return this.root.setLeft(value);
  }
  setRight(value) {
    return this.root.setRight(value);
  }
  getLeft() {
    return this.root.getLeft();
  }
  getRight() {
    return this.root.getRight();
  }
  getValue() {
    return this.root.getValue();
  }
}

const tree = new BinaryTree(8);
tree
  .setLeft(3)
  .setLeft(1)
  .setRight(6);
tree.setRight(10).setRight(14);

function toArray(tree) {
  const queue = new Queue();
  const arr = [tree.getValue()];
  queue.enqueue(tree);
  while (queue.size > 0) {
    const node = queue.dequeue();
    if (node) {
      const leftNode = node.getLeft();
      const rightNode = node.getRight();
      if (leftNode) {
        arr.push(leftNode);
      } else if (rightNode) {
        arr.push(rightNode);
      }

      queue.enqueue(leftNode);
      queue.enqueue(rightNode);
    }
  }
  return arr;
}

// console.log(toArray(tree));

export function InOrderTraversal(tree) {
  if (tree) {
    console.log(tree.getValue());
    InOrderTraversal(tree.getLeft());

    InOrderTraversal(tree.getRight());
  }
}

function contains(elm, tree) {
  if (!tree) {
    return false;
  }
  if (elm === tree.getValue()) {
    return true;
  }
  if (elm > tree.getValue()) {
    return contains(elm, tree.getRight());
  } else {
    return contains(elm, tree.getLeft());
  }
}

// InOrderTraversal(tree);
// console.log(contains(10, tree));
// console.log(contains(13, tree));
