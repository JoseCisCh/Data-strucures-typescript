class BSTNode {
    value: number;
    left: BSTNode | null;
    right: BSTNode | null;

    constructor(value: number) {
        this.value = value;
    }
}

class BinarySearchTree {

    root: BSTNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number) {
        if(this.root === null) {
            this.root = new BSTNode(value);
        } else {
            let nodeToAppend = this.root;

            while(nodeToAppend.right || nodeToAppend.left) {
                if(value > nodeToAppend.value) {
                    if(nodeToAppend.right) {
                        nodeToAppend = nodeToAppend.right;

                    } else break;
                } else if (value < nodeToAppend.value){
                    if(nodeToAppend.left) {
                        nodeToAppend = nodeToAppend.left;
                    } else break;
                }
            }

            if(value > nodeToAppend.value) {
                nodeToAppend.right = new BSTNode(value);
            } else {
                nodeToAppend.left = new BSTNode(value);
            }

        }

        return this;
    }

    lookup(value) {
        if(!this.root) return null;
        let currentNode = this.root;
        let foundNode: BSTNode | null = null;

        while(!foundNode) {
            if(value === currentNode?.value) {
                foundNode = currentNode!;
            }
            if(value > currentNode!.value) {
                if(currentNode?.right) {
                    currentNode = currentNode.right
                } else {
                    break;
                }
            } else if(value < currentNode!.value) {
                if(currentNode?.left) {
                    currentNode = currentNode.left;
                } else {
                    break;
                }
            }
        }


        return foundNode;
        
    }

    delete(value: number) {
        if(!this.root) return this;
        let currentNode = this.root;
        let prevNode: BSTNode | null = null;

        while(currentNode) {
            if(currentNode.value === value) {
                // Case node to delete in Root node
                if(!prevNode) { 
                    let newRoot: BSTNode | null = null;

                    // Case root has right node
                    if(currentNode.right) {
                        let currentPivot = currentNode.right
                        newRoot = currentNode.right;

                        // Find the leftmost child
                        while(newRoot.left) {
                            currentPivot = newRoot;
                            newRoot = newRoot.left;
                        }
                        let previousRoot = this.root;
                        newRoot.left = this.root.left;
                        this.root = newRoot;

                        if(this.root != currentPivot) {
                            currentPivot.left = this.root.right;
                            this.root.right = previousRoot.right;
                        }
                    } else if(currentNode.left) { // Case root has no right node but has left.
                        this.root = currentNode.left;
                    } else {                      // Case root has neither right or left node.
                        this.root = null;
                    }
                    return this;
                } else { // Case node to delete is not the root.
                    let newSubRoot: BSTNode | null = null;

                    // Case where the node has a right child
                    if(currentNode.right) {

                        let currentPivot = currentNode.right
                        newSubRoot = currentNode.right;
                        // Find the leftmost child
                        while(newSubRoot.left) {
                            currentPivot = newSubRoot;
                            newSubRoot = newSubRoot.left;
                        }
                        
                        
                        newSubRoot.left = currentNode.left;

                        if(newSubRoot != currentPivot) {
                            currentPivot.left = newSubRoot.right;
                            newSubRoot.right = currentPivot;
                        }

                        if(value < prevNode.value) {
                            prevNode.left = newSubRoot;
                        } else {
                            prevNode.right = newSubRoot;
                        }
                    } else if(currentNode.left) {
                        if(value < prevNode.value) {
                            prevNode.left = currentNode.left;
                        } else {
                            prevNode.right = currentNode.left;
                        }
                    } else {
                        if(value < prevNode.value) {
                            prevNode.left = null;
                        } else {
                            prevNode.right = null;
                        }
                    }

                    return this;
                }
            } else {
                prevNode = currentNode;
                if(value < currentNode.value) {
                    currentNode = currentNode.left!;
                } else {
                    currentNode = currentNode.right!;
                }
            }
        }

        return this;
    }

    traverse(node: BSTNode | null) {
        let curNode = node == null ? this.root : node;
        if(!curNode) return null;

        const tree : {value: number, left: BSTNode| null, right: BSTNode | null} = {value: curNode.value, left: null, right: null}
        tree.left = curNode?.left == null ? null : this.traverse(curNode.left)!;
        tree.right = curNode.right == null ? null : this.traverse(curNode.right)!;

        return tree;

    }

    breadthFirstSearch() {
        if(!this.root) return;
        let currentNode = this.root;
        let list: number[] = [];
        let queue: BSTNode[] | null = []; // This queue in case of increasing too much can be very memory consuming.

        queue.push(currentNode);

        let i= 0;
        while(queue.length > 0) {
            // console.log(`Shifting queue item ${queue[0]}`);
            currentNode = queue.shift()!;
            list.push(currentNode.value);

            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            
        }

        return list;
    }

    depthFirstSearch(): number[] {
        function visit(list: number[], node: BSTNode) {
            list.push(node.value);
            if(node?.left) visit(list, node.left);
            if(node?.right) visit(list, node.right);
            
        }

        let root = this.root!;
        let list = [];
        visit(list, root);

        return list;
    }

    dfsInorder() {
        function traverseInOrder(node: BSTNode | null, list: number[]) {
            if(node?.left) {
                traverseInOrder(node.left, list)
            }

            list.push(node!.value);

            if(node?.right) {
                traverseInOrder(node.right, list);
            }
            return list
        }
        return traverseInOrder(this.root, []);
    }

    dfsPostorder() {
        function traversePostOrder(node: BSTNode | null, list: number[]) {
            
            if(node?.left) {
                traversePostOrder(node.left, list)
            }
            
            if(node?.right) {
                traversePostOrder(node.right, list);
            }
            list.push(node!.value);
            
            return list
        }

        return traversePostOrder(this.root, []);
    }

    dfsPreorder() {
        function traversePreOrder(node: BSTNode | null, list: number[]) {
            list.push(node!.value);

            if(node?.left) {
                traversePreOrder(node.left, list)
            }

            if(node?.right) {
                traversePreOrder(node.right, list);
            }
            return list
        }
        
        return traversePreOrder(this.root, []);
    }
}

export { BSTNode, BinarySearchTree }