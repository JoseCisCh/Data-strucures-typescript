import Node from "./Node"

export default class LinkedList {
    head: Node;
    tail: Node;
    length: number; // Not mandatory but useful
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value: number): LinkedList {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.length++;
        return this;
    }

    prepend(value: number): LinkedList {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(): void {
        let currNode = this.head;
        let llString = "[";
        llString += currNode.value;
        while(currNode.next) {
            llString += ', ';
            currNode = currNode.next;
            llString += currNode.value ;
        }
        llString += `] | Head=${this.head.value}. Tail=${this.tail.value}. Length ${this.length}`;
        console.log(llString);
    }

    insert(index: number, value: number) {

        const {prevNode, currNode, i} = this.traverseList(index);

        let newNode = new Node(value);

        if(i < index) {
          currNode.next = newNode;  
          this.tail = newNode;
          this.length++
          return this;
        } else {
            if(!prevNode) {
                newNode.next = currNode;
                this.head = newNode
                this.length++
                return this;
            }
            prevNode.next = newNode;
            newNode.next = currNode;
        }
        
        this.length ++;
        return this;
    }

    delete(index) {
        /* let i = 0;
        let currNode = this.head;
        let prevNode: Node | null = null;

        while(i < index && currNode.next) {
            prevNode = currNode;
            currNode = currNode.next;
            i++;
        } */

        const {prevNode, currNode, i} = this.traverseList(index);

        if(i < index) return this;
        if(!prevNode && i == 0) {
            this.head = this.head.next;
        } else {
            if(this.tail == currNode) {
                prevNode.next = null;
                this.tail = prevNode;
            } else {
                prevNode.next = currNode.next;
            }
        }
        this.length--;
        return this;
    }

    traverseList(index: number): {prevNode: Node|null, currNode: Node, i: number} {
        let currNode = this.head;
        let prevNode: Node | null = null;
        let i=0;
        while(i < index && currNode.next) {
            prevNode = currNode;
            currNode = currNode.next;
            i++;
        }

        return {prevNode, currNode, i};
    }

    reverse() {
        if(this.length == 1) return this;
        let currentHead = this.head;

        this.pointTo(currentHead.next, currentHead);
        currentHead.next = null;
        this.tail = currentHead;
    }

    pointTo(pointerNode: Node, nodeToPoint: Node) {
        if(pointerNode.next) {
            this.pointTo(pointerNode.next, pointerNode);
        } else {
            this.head = pointerNode;
            pointerNode.next = nodeToPoint;
            return;
        }

        pointerNode.next = nodeToPoint;
        return;
    }
}