from typing import List, Optional
from Node.Node import Node 


class BinaryTree:

    def __init__(self, root: Optional[Node] = None):
        self.root = root

    def add(self, value):

        if self.root == None:
            self.root = Node(value)
            return self
        else:
            currentNode = self.root

            while(True):
                if(value < currentNode.value):
                    if(currentNode.left):
                        currentNode = currentNode.left
                    else:
                        currentNode.left = Node(value)
                        break
                else:
                    if(currentNode.right):
                        currentNode = currentNode.right
                    else:
                        currentNode.right = Node(value)
                        break

            return self
    
    # This method in pending, not working correctly right now
    def delete(self, value):
        # Check if root exists
        if self.root != None:
            currentNode = self.root
            prevNode = None
            while currentNode != None:
                # Case node with value is found
                if currentNode.value == value:
                   
                    
                    #Check if has right node
                    if(currentNode.right):
                        print(f"Setting first right node to {currentNode.right.value}")
                        firstRightNode = currentNode.right
                        nodeToBePointed = firstRightNode

                        curLeftNode = firstRightNode.left
                        while curLeftNode != None:
                            print(f"curLeftNode set to {curLeftNode.value}")
                            nodeToBePointed = curLeftNode
                            curLeftNode = curLeftNode.left

                        if currentNode == self.root:
                            self.root = nodeToBePointed

                        if prevNode:
                            if value < prevNode.value:
                                prevNode.left = nodeToBePointed
                            elif value > prevNode.value:
                                prevNode.right = nodeToBePointed

                        if nodeToBePointed != firstRightNode:
                            nodeToBePointed.right = firstRightNode
                            if firstRightNode.left == nodeToBePointed:
                                firstRightNode.left = None
                        
                        nodeToBePointed.left = currentNode.left
                        break

                    # Case node does not have right node
                    elif currentNode.left:
                        if currentNode == self.root:
                            self.root = currentNode.left
                            currentNode.right
                else:
                    if value < currentNode.value :
                        if currentNode.left:
                            print(f"Setting previous node to {currentNode.value}")
                            prevNode = currentNode
                            currentNode = currentNode.left
                        else:
                            currentNode = None
                    elif value > currentNode.value:
                        if currentNode.right:
                            print(f"Setting previous node to {currentNode.value}")
                            prevNode = currentNode
                            currentNode = currentNode.right
                        else:
                            currentNode = None
                    else:
                        currentNode = None



    
    def preOrder(self, node: Optional[Node] = None, visited: List = []):
        
        if(node == None):
            return
       
        visited.append(node.value)
        
        self.preOrder(node.left, visited)

        self.preOrder(node.right, visited)
    
    def inOrder(self, node: Optional[Node] = None, visited: List = []):

        if(node == None):
            return
        
        self.inOrder(node.left, visited)
        visited.append(node.value)
        self.inOrder(node.right, visited)

    
    def postOrder(self, node: Optional[Node] = None, visited: List = []):

        if(node == None):
            return
        
        self.postOrder(node.left, visited)
        self.postOrder(node.right, visited)
        visited.append(node.value)



if __name__ == "__main__":
    bst =  BinaryTree()

    bst.add(20).add(15).add(30).add(10).add(13).add(17).add(25).add(35)
    
    nodesVisited = []

    bst.preOrder(bst.root, nodesVisited)
    print(f"Nodes visited in preorder manner {nodesVisited}")

    nodesVisited = []
    bst.inOrder(bst.root, nodesVisited)
    print(f"Nodes visited inorder manner {nodesVisited}")

    nodesVisited = []
    bst.postOrder(bst.root, nodesVisited)
    print(f"Nodes visited postorder manner {nodesVisited}")

    print("--Deletion section--")

    print("Deleting node 20")
    bst.delete(20)
    nodesVisited = []
    bst.preOrder(bst.root, nodesVisited)
    print(f"Nodes after deletion of 20 {nodesVisited}")


    print("Deleting node 30")
    bst.delete(30)
    nodesVisited = []
    bst.preOrder(bst.root, nodesVisited)
    print(f"Nodes after deletion of 30 {nodesVisited}")
