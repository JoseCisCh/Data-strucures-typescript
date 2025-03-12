"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(value, next) {
        this.value = value;
        if (next)
            this.next = next;
    }
    return Node;
}());
exports.default = Node;
