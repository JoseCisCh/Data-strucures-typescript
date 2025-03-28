"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BST_1 = require("./BST");
var tree = new BST_1.BinarySearchTree();
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
var visited = tree.breadthFirstSearch();
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
