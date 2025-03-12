export default class Node {

    value: number;
    next?: Node;

    constructor(value: number, next?: Node) {
        this.value = value;
        if(next) this.next = next;
    }
}