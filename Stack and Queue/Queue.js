//implementing a queue data structure using an array

class Queue {
    constructor() {
        this.items = [];
    }
    //add to rear/front part
    enqueue(element) {
        this.items.push(element);
    }
    //remove from rear/front part
    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        } else {
            return null;
        }
    }

    size(){
        return this.items.length
    }

    print(){
       console.log(this.items.toString());
    }
}
const q =new Queue()
console.log(q.isEmpty());

q.enqueue(1)
q.enqueue(4)
q.enqueue(3)
q.enqueue(2)
console.log(`element at first/front : ${q.peek()}`);
q.dequeue()
console.log(`size of the queue: ${q.size()}`);
q.print()