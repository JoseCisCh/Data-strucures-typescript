import { BSTNode, BinarySearchTree } from "./BST";

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);
tree.insert(17);
tree.insert(16);

console.log('Looking up 16');
console.log(tree.lookup(16));

console.log('Looking up 10');
console.log(tree.lookup(10));

console.log('Looking up 5');
console.log(tree.lookup(5));

console.log('Looking up 15');
console.log(tree.lookup(15));

console.log('Looking up 12');
console.log(tree.lookup(12));

console.log(JSON.stringify(tree.traverse(null)));

console.log('Deleting section');

// console.log('Deleting root (10)');
// console.log(tree.delete(10));
// console.log(JSON.stringify(tree.traverse(null)));

// console.log('Deleting (15)');
// console.log(tree.delete(15));
// console.log(JSON.stringify(tree.traverse(null)));

console.log('Deleting (17)');
console.log(tree.delete(17));
console.log(JSON.stringify(tree.traverse(null)));

console.log('Deleting (16)');
console.log(tree.delete(16));
console.log(JSON.stringify(tree.traverse(null)));