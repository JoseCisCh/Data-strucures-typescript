"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value, next, prev) {
        this.value = value;
        if (next)
            this.next = next;
        if (prev)
            this.prev = prev;
    }
}
exports.default = Node;
//# sourceMappingURL=Node.js.map