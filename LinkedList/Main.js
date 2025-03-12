"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var linkedList = new LinkedList_1.default(10);
console.log(linkedList);
linkedList.append(16);
console.log(linkedList);
linkedList.append(25);
console.log(linkedList);
linkedList.prepend(1);
console.log(linkedList);
linkedList.printList();
linkedList.insert(1, 3);
linkedList.printList();
linkedList.insert(0, 2);
linkedList.printList();
linkedList.insert(4, 500);
linkedList.printList();
linkedList.insert(0, 1000);
linkedList.printList();
while (true) {
    console.log("Hello");
}
