"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = new Node_1.default(value);
        this.tail = this.head;
        this.length = 1;
    }
    LinkedList.prototype.append = function (value) {
        this.tail.next = new Node_1.default(value);
        this.tail = this.tail.next;
        this.length++;
        return this;
    };
    LinkedList.prototype.prepend = function (value) {
        var newNode = new Node_1.default(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    };
    LinkedList.prototype.printList = function () {
        var currNode = this.head;
        var llString = "[";
        while (currNode.next) {
            if (!(currNode === this.head))
                llString += ', ';
            currNode = currNode.next;
            llString += currNode.value;
        }
        llString += "]";
        console.log(llString);
    };
    LinkedList.prototype.insert = function (index, value) {
        var i = 0;
        var currNode = this.head;
        var prevNode = null;
        while (i <= index && currNode.next) {
            console.log("Inserting for index= ".concat(index, " value= ").concat(value, " loop"));
            prevNode = currNode;
            currNode = currNode.next;
            i++;
        }
        var newNode = new Node_1.default(value);
        if (i < index) {
            currNode.next = newNode;
        }
        else {
            if (prevNode) {
                prevNode.next = newNode;
            }
            newNode.next = currNode;
        }
        this.length++;
    };
    return LinkedList;
}());
exports.default = LinkedList;
