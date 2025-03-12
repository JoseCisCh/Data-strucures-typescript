import { BSTNode, BinarySearchTree } from "./BST";

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(4);
tree.insert(15);
tree.insert(6);
tree.insert(12);
tree.insert(11);
tree.insert(17);
tree.insert(16);


console.log('Breadth first search:');
let visited = tree.breadthFirstSearch();
console.log(visited);

console.log('Depth first search:');
visited = tree.depthFirstSearch();
console.log(visited);

console.log('DFS InOrder:');
visited = tree.dfsInorder();
console.log(visited);

console.log('DFS PostOrder:');
visited = tree.dfsPostorder();
console.log(visited);

console.log('DFS Preorder:');
visited = tree.dfsPreorder();
console.log(visited);
