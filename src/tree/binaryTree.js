class Node {
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
    return this;
  }

  setRight(value) {
    if (this.right) {
      this.right.setRight(value);
      return this.right;
    }
    this.right = new Node(value);
    return this;
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

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    return this.root.insert(value);
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

function InOrderTraversal(tree) {
  if (tree) {
    InOrderTraversal(tree.getLeft());
    console.log(tree.getValue());
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
console.log(contains(10, tree));
