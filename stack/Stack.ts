class StackNode {
    value: number;
    next: StackNode | null | undefined;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class Stack {

    top : StackNode | null;
    bottom: StackNode | null;
    length: number;

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if(this.top) return this.top.value;
    }

    pop() {
        if(this.top) {
            let value = this.top.value;

            if(this.top === this.bottom) {
                this.bottom = null;
                this.top = null;
                this.length--;
                return value;
            }
            
            this.top = this.top.next as StackNode;
            this.length--;
            return value;
        }
    }

    push(value: number) {
        let newNode = new StackNode(value);
        if(this.length === 0 ) {
            this.bottom = newNode;
            this.top = newNode;
            this.length++;
            
            return this;
        }
        
        let tempTop = this.top;
        this.top = newNode;
        this.top.next = tempTop;
        this.length++;

        return this;
    }
}

let stack = new Stack();

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