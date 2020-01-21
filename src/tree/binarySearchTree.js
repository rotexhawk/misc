import { BinaryTree, Node, InOrderTraversal } from './binaryTree'; 

//
// const tree = new BinaryTree(8);
// tree
//   .setLeft(3)
//   .setLeft(1)
//   .setRight(6);
// tree.setRight(10).setRight(14);

class BinarySearchTree {

constructor(){
  this.root = null; 
}

  insert(val){
    if(!this.root){
      this.root = new Node(val);
      return;
   }

    var currentNode = this.root;
    var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }
 }
}


const tree = new BinarySearchTree();
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(6);
tree.insert(10);
tree.insert(14);

console.log('tree', tree)
InOrderTraversal(tree)