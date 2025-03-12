export default class Node {

    value: number;
    next?: Node;
    prev?: Node;

    constructor(value: number, next?: Node, prev?: Node) {
        this.value = value;
        if(next) this.next = next;
        if(prev) this.prev = prev;
    }
}