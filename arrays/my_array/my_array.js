class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const itemToDelete = this.data[this.length-1];
        delete this.data[this.length - 1];
        this.length--;
        return itemToDelete;
    }

    delete(index) {
        const item = this.data[index];

        this.shiftItems(index);
    }

    shiftItems(index) {
        for(let i=0; i<length-1;i++){
            this.data[i] = this.data[i+1];
        }
        

        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
console.log(newArray);
newArray.push("Hello there");
newArray.push("Bye");
console.log(newArray.get(0));
console.log(newArray);
newArray.pop();
console.log(newArray);