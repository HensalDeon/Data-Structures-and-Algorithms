class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        //size is not mandatory
        this.size = 0;
    }
    
    //list is empty
    isEmpty() {
        return this.size === 0;
    }
    
    //to get the size
    getSize() {
        return this.size;
    }
    
    //to insert the value to node
    insert(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
            this.size++;
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
            this.size++;
        }
    }
    
    //to remove data from the node
    removeData(data) {
        if (this.isEmpty()) {
            console.log("list is empty");
            return;
        }
        let current = this.head;
        let previous = null;
        while (current !== this.head || previous === null) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = current.next;
                    this.tail.next = this.head;
                } else if (current === this.tail) {
                    previous.next = this.head;
                    this.tail = previous;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return;
            }
            previous = current;
            current = current.next;
        }
        console.log("data not found");
    }
    
    //to print the output
    display() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let str = "";
            let current = this.head;
            if (this.head !== null) {
                do {
                    str = str + `${current.data} <---> `;
                    current = current.next;
                } while (current !== this.head);
            }
            console.log(`<---> ${str} `);
        }
    }    
}
const cll = new LinkedList();
cll.insert(1);
cll.insert(3);
cll.insert(4);
cll.insert(2);
cll.removeData(3)
cll.display();
