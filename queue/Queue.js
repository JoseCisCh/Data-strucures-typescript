var QueueNode = /** @class */ (function () {
    function QueueNode(value) {
        this.value = value;
        this.next = null;
    }
    return QueueNode;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    Queue.prototype.peek = function () {
        if (this.first)
            return this.first.value;
    };
    Queue.prototype.dequeue = function () {
        if (this.first) {
            var value = this.first.value;
            if (this.first === this.last) {
                this.last = null;
                this.first = null;
                this.length--;
                return value;
            }
            this.first = this.first.next;
            this.length--;
            return value;
        }
    };
    Queue.prototype.enqueue = function (value) {
        var newNode = new QueueNode(value);
        if (this.length === 0) {
            this.last = newNode;
            this.first = newNode;
            this.length++;
            return this;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
        return this;
    };
    return Queue;
}());
var queue = new Queue();
console.log('------enqueueing 1 into the queue------');
queue.enqueue(1);
console.log(queue.first);
console.log(queue.last);
console.log(queue.peek());
console.log('------Dequeueing 1 into the queue------');
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.first);
console.log(queue.last);
console.log('------enqueueing 2 into the queue------');
queue.enqueue(2);
console.log(queue.peek());
console.log(queue.first);
console.log(queue.last);
console.log('------enqueueing 3 into the queue------');
queue.enqueue(3);
console.log(queue.peek());
console.log(queue.first);
console.log(queue.last);
console.log(queue);
console.log('------enqueueing 4 into the queue------');
queue.enqueue(4);
console.log(queue.peek());
console.log(queue.first);
console.log(queue.last);
console.log(queue);
console.log('------Dequeuing from queue (2)------');
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.first);
console.log(queue.last);
console.log(queue);
