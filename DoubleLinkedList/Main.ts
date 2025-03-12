import DoubleLinkedList from "./DoubleLinkedList";
import Node from "./Node";

let doubleLinkedList = new DoubleLinkedList(10);
doubleLinkedList.printList();
doubleLinkedList.append(16);
doubleLinkedList.printList();
doubleLinkedList.append(25);
doubleLinkedList.printList();
doubleLinkedList.prepend(1);
doubleLinkedList.printList();


doubleLinkedList.insert(1, 3);
doubleLinkedList.printList();
doubleLinkedList.insert(0, 2);
doubleLinkedList.printList();

doubleLinkedList.insert(4, 500);
doubleLinkedList.printList();

doubleLinkedList.insert(20, 20000);
doubleLinkedList.printList();

doubleLinkedList.insert(0, 1000);
doubleLinkedList.printList();

doubleLinkedList.delete(0);
doubleLinkedList.printList();

doubleLinkedList.delete(2);
doubleLinkedList.printList();

doubleLinkedList.delete(6);
doubleLinkedList.printList();

doubleLinkedList.delete(100);
doubleLinkedList.printList();

doubleLinkedList.delete(6);
doubleLinkedList.printList();

doubleLinkedList.insert(0, -1);
doubleLinkedList.printList();

doubleLinkedList.delete(0);
doubleLinkedList.printList();
