import LinkedList from "./LinkedList";
import Node from "./Node";

let linkedList = new LinkedList(10);
linkedList.printList();
linkedList.append(16);
linkedList.printList();
linkedList.append(25);
linkedList.printList();
linkedList.prepend(1);
linkedList.printList();


linkedList.insert(1, 3);
linkedList.printList();
linkedList.insert(0, 2);
linkedList.printList();

linkedList.insert(4, 500);
linkedList.printList();

linkedList.insert(20, 20000);
linkedList.printList();

linkedList.insert(0, 1000);
linkedList.printList();

linkedList.delete(0);
linkedList.printList();

linkedList.delete(2);
linkedList.printList();

linkedList.delete(6);
linkedList.printList();

linkedList.delete(100);
linkedList.printList();

linkedList.delete(6);
linkedList.printList();

linkedList.insert(0, -1);
linkedList.printList();

linkedList.delete(0);
linkedList.printList();

console.log('Reversing');
linkedList.reverse();
linkedList.printList();

let linkedList2 = new LinkedList(1);
linkedList2.printList();
linkedList2.reverse();
linkedList2.printList();
