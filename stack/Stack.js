var StackNode = /** @class */ (function () {
    function StackNode(value) {
        this.value = value;
        this.next = null;
    }
    return StackNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    Stack.prototype.peek = function () {
        if (this.top)
            return this.top.value;
    };
    Stack.prototype.pop = function () {
        if (this.top) {
            var value = this.top.value;
            if (this.top === this.bottom) {
                this.bottom = null;
                this.top = null;
                this.length--;
                return value;
            }
            this.top = this.top.next;
            return value;
        }
    };
    Stack.prototype.push = function (value) {
        var newNode = new StackNode(value);
        if (this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
            this.length++;
            return this;
        }
        var tempTop = this.top;
        this.top = newNode;
        this.top.next = tempTop;
        this.length++;
        return this;
    };
    return Stack;
}());
var stack = new Stack();
stack.push(1);
console.log(stack.top);
console.log(stack.bottom);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.top);
console.log(stack.bottom);
stack.push(2);
console.log(stack.peek());
console.log(stack.top);
console.log(stack.bottom);
console.log('------Pushing 3 into the stack------');
stack.push(3);
console.log(stack.peek());
console.log(stack.top);
console.log(stack.bottom);
console.log('------Pushing 4 into the stack------');
stack.push(4);
console.log(stack.peek());
console.log(stack.top);
console.log(stack.bottom);
console.log(stack);
console.log('------Popping from stack (4)------');
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.top);
console.log(stack.bottom);
console.log(stack);
