const LinkedList = require("./L-S_Stack&Queue");

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(data){
        this.list.enqueue(data);
    }

    dequeue(){
       return this.list.dequeue()
    }

    peek(){
        return this.list.head.data
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getsize()
    }

    display(){
        this.list.display()
    }
}

const queue = new LinkedListQueue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.display()
console.log(`size of the linked list: ${queue.getSize()}`);

queue.dequeue()
queue.display()

console.log(`data at top: ${queue.peek()}`);
