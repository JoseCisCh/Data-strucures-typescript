"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class DoubleLinkedList {
    constructor(value) {
        this.head = new Node_1.default(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        let newNode = new Node_1.default(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        let newNode = new Node_1.default(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        let currNode = this.head;
        let llString = "[";
        llString += currNode.value;
        while (currNode.next) {
            llString += ', ';
            currNode = currNode.next;
            llString += currNode.value;
        }
        llString += `] | Head=${this.head.value}. Tail=${this.tail.value}. Length=${this.length}`;
        console.log(llString);
    }
    insert(index, value) {
        if (index == 0) {
            this.prepend(value);
            return this;
        }
        else if (index >= this.length) {
            this.append(value);
            return this;
        }
        const { prevNode, currNode } = this.traverseList(index);
        let newNode = new Node_1.default(value);
        newNode.next = currNode;
        currNode.prev = newNode;
        prevNode.next = newNode;
        this.length++;
    }
    delete(index) {
        const { prevNode, currNode, i } = this.traverseList(index);
        if (i < index)
            return this;
        if (!prevNode && i == 0) {
            this.head.next.prev = null;
            this.head = this.head.next;
        }
        else {
            if (this.tail == currNode) {
                prevNode.next = null;
                this.tail.prev = null;
                this.tail = prevNode;
            }
            else {
                prevNode.next = currNode.next;
                currNode.next.prev = prevNode;
            }
        }
        this.length--;
    }
    traverseList(index) {
        let currNode = this.head;
        let prevNode = null;
        let i = 0;
        while (i < index && currNode.next) {
            prevNode = currNode;
            currNode = currNode.next;
            i++;
        }
        return { prevNode, currNode, i };
    }
}
exports.default = DoubleLinkedList;
//# sourceMappingURL=DoubleLinkedList.js.map