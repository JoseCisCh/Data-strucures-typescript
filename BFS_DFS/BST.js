"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = exports.BSTNode = void 0;
var BSTNode = /** @class */ (function () {
    function BSTNode(value) {
        this.value = value;
    }
    return BSTNode;
}());
exports.BSTNode = BSTNode;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        if (this.root === null) {
            this.root = new BSTNode(value);
        }
        else {
            var nodeToAppend = this.root;
            while (nodeToAppend.right || nodeToAppend.left) {
                if (value > nodeToAppend.value) {
                    if (nodeToAppend.right) {
                        nodeToAppend = nodeToAppend.right;
                    }
                    else
                        break;
                }
                else if (value < nodeToAppend.value) {
                    if (nodeToAppend.left) {
                        nodeToAppend = nodeToAppend.left;
                    }
                    else
                        break;
                }
            }
            if (value > nodeToAppend.value) {
                nodeToAppend.right = new BSTNode(value);
            }
            else {
                nodeToAppend.left = new BSTNode(value);
            }
        }
        return this;
    };
    BinarySearchTree.prototype.lookup = function (value) {
        if (!this.root)
            return null;
        var currentNode = this.root;
        var foundNode = null;
        while (!foundNode) {
            if (value === (currentNode === null || currentNode === void 0 ? void 0 : currentNode.value)) {
                foundNode = currentNode;
            }
            if (value > currentNode.value) {
                if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.right) {
                    currentNode = currentNode.right;
                }
                else {
                    break;
                }
            }
            else if (value < currentNode.value) {
                if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.left) {
                    currentNode = currentNode.left;
                }
                else {
                    break;
                }
            }
        }
        return foundNode;
    };
    BinarySearchTree.prototype.delete = function (value) {
        if (!this.root)
            return this;
        var currentNode = this.root;
        var prevNode = null;
        while (currentNode) {
            if (currentNode.value === value) {
                // Case node to delete in Root node
                if (!prevNode) {
                    var newRoot = null;
                    // Case root has right node
                    if (currentNode.right) {
                        var currentPivot = currentNode.right;
                        newRoot = currentNode.right;
                        // Find the leftmost child
                        while (newRoot.left) {
                            currentPivot = newRoot;
                            newRoot = newRoot.left;
                        }
                        var previousRoot = this.root;
                        newRoot.left = this.root.left;
                        this.root = newRoot;
                        if (this.root != currentPivot) {
                            currentPivot.left = this.root.right;
                            this.root.right = previousRoot.right;
                        }
                    }
                    else if (currentNode.left) { // Case root has no right node but has left.
                        this.root = currentNode.left;
                    }
                    else { // Case root has neither right or left node.
                        this.root = null;
                    }
                    return this;
                }
                else { // Case node to delete is not the root.
                    var newSubRoot = null;
                    // Case where the node has a right child
                    if (currentNode.right) {
                        var currentPivot = currentNode.right;
                        newSubRoot = currentNode.right;
                        // Find the leftmost child
                        while (newSubRoot.left) {
                            currentPivot = newSubRoot;
                            newSubRoot = newSubRoot.left;
                        }
                        newSubRoot.left = currentNode.left;
                        if (newSubRoot != currentPivot) {
                            currentPivot.left = newSubRoot.right;
                            newSubRoot.right = currentPivot;
                        }
                        if (value < prevNode.value) {
                            prevNode.left = newSubRoot;
                        }
                        else {
                            prevNode.right = newSubRoot;
                        }
                    }
                    else if (currentNode.left) {
                        if (value < prevNode.value) {
                            prevNode.left = currentNode.left;
                        }
                        else {
                            prevNode.right = currentNode.left;
                        }
                    }
                    else {
                        if (value < prevNode.value) {
                            prevNode.left = null;
                        }
                        else {
                            prevNode.right = null;
                        }
                    }
                    return this;
                }
            }
            else {
                prevNode = currentNode;
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                }
                else {
                    currentNode = currentNode.right;
                }
            }
        }
        return this;
    };
    BinarySearchTree.prototype.traverse = function (node) {
        var curNode = node == null ? this.root : node;
        if (!curNode)
            return null;
        var tree = { value: curNode.value, left: null, right: null };
        tree.left = (curNode === null || curNode === void 0 ? void 0 : curNode.left) == null ? null : this.traverse(curNode.left);
        tree.right = curNode.right == null ? null : this.traverse(curNode.right);
        return tree;
    };
    BinarySearchTree.prototype.breadthFirstSearch = function () {
        if (!this.root)
            return;
        var currentNode = this.root;
        var list = [];
        var queue = []; // This queue in case of increasing too much can be very memory consuming.
        queue.push(currentNode);
        var i = 0;
        while (queue.length > 0) {
            // console.log(`Shifting queue item ${queue[0]}`);
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left)
                queue.push(currentNode.left);
            if (currentNode.right)
                queue.push(currentNode.right);
        }
        return list;
    };
    BinarySearchTree.prototype.depthFirstSearch = function () {
        function visit(list, node) {
            list.push(node.value);
            if (node === null || node === void 0 ? void 0 : node.left)
                visit(list, node.left);
            if (node === null || node === void 0 ? void 0 : node.right)
                visit(list, node.right);
        }
        var root = this.root;
        var list = [];
        visit(list, root);
        return list;
    };
    BinarySearchTree.prototype.dfsInorder = function () {
        function traverseInOrder(node, list) {
            if (node === null || node === void 0 ? void 0 : node.left) {
                traverseInOrder(node.left, list);
            }
            list.push(node.value);
            if (node === null || node === void 0 ? void 0 : node.right) {
                traverseInOrder(node.right, list);
            }
            return list;
        }
        return traverseInOrder(this.root, []);
    };
    BinarySearchTree.prototype.dfsPostorder = function () {
        function traversePostOrder(node, list) {
            if (node === null || node === void 0 ? void 0 : node.left) {
                traversePostOrder(node.left, list);
            }
            if (node === null || node === void 0 ? void 0 : node.right) {
                traversePostOrder(node.right, list);
            }
            list.push(node.value);
            return list;
        }
        return traversePostOrder(this.root, []);
    };
    BinarySearchTree.prototype.dfsPreorder = function () {
        function traversePreOrder(node, list) {
            list.push(node.value);
            if (node === null || node === void 0 ? void 0 : node.left) {
                traversePreOrder(node.left, list);
            }
            if (node === null || node === void 0 ? void 0 : node.right) {
                traversePreOrder(node.right, list);
            }
            return list;
        }
        return traversePreOrder(this.root, []);
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
