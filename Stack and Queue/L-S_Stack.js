const LinkedList = require('./L-S_Stack&Queue')

class LinkedListStack {
    constructor(){
         this.list = new LinkedList()
    }

    push(data){
        this.list.push(data) 
    }

    pop(){
       return this.list.pop()
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
        return this.list.display()
    }
}

const stack = new LinkedListStack()
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(`size of the linked list: ${stack.getSize()}`);
stack.display();
stack.pop();
stack.display();

console.log(`data at top: ${stack.peek()}`);