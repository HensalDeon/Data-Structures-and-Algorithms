class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }
    getsize() {
        return this.size;
    }

    enqueue(data){
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.tail = newNode;
            this.head = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;

    }

    dequeue(){
        if (this.isEmpty()) {
            return null;
        } else {
            this.head = this.head.next;
            this.size--;
        }
    }

    peek() {
        return this.head.data;
    }

    display() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let current = this.head;
            let str = "";
            while (current !== null) {
                str = str + current.data + "--->";
                current = current.next;
            }
            console.log(`${str} null`);
        }
    }
    
    push(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        } else {
            this.head = this.head.next;
            this.size--;
        }
    }
    
    
}
module.exports = LinkedList;

// const ls = new LinkedList();
// ls.push(11);
// ls.push(12);
// ls.push(13);
// ls.push(14);

// console.log(`size of the linked list: ${ls.getsize()}`);
// ls.display();

// ls.pop();
// ls.display();

// console.log(`data at top: ${ls.peek()}`);
