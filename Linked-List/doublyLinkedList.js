class Node {
    constructor(data, prev = null, next = null) {
        this.prev = prev;
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
    //to insert node at begining
    insertFirst(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    
    //to insert node at the end
    insertEnd(data) {
        if (this.head == null && this.tail == null) {
            this.head = this.tail;
            this.tail = new Node(data);
        } else {
            const newNode = new Node(data);
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }
    //insert at an index
    insertIndex(data, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        const newNode = new Node(data);
        if (index == 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.size++;
            return;
        } else {
            let current = this.head;
            let previous;
            let count = 0;
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            newNode.next = current;
            previous.next = newNode;
            newNode.prev = previous;
            current.prev = newNode;
            this.size++;
            return;
        }
    }

    //to insert node after a specifi value
    insertAfterData(data, value) {
        const newNode = new Node(value);
        if (data == this.tail.data) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.size++;
        } else {
            let current = this.head;
            let datafound;
            while (current !== null) {
                if (current.data == data) {
                    datafound = true;
                    let previous = current;
                    current = current.next;

                    newNode.next = current;
                    previous.next = newNode;
                    newNode.prev = previous;
                    current.prev = newNode;
                    this.size++;
                }

                current = current.next;
            }
            if (!datafound) {
                console.log("Data is not found");
            }
        }
    }

    //to insert node before a specific data
    insertBeforeData(data, value) {
        const newNode = new Node(value);
        if (data == this.head.data) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.size++;
        } else {
            let current = this.head;
            while (current !== null) {
                if (current.data == data) {
                    newNode.prev = current.prev;
                    newNode.next = current;
                    current.prev.next = newNode;
                    current.prev = newNode;
                    this.size++;
                    return;
                }
                current = current.next;
            }
        }
    }
    //to remove from the front
    removeFront() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            //let removedNode = this.head;
            this.head = this.head.next;
            if (this.head != null) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            this.size--;
            return this.head;
        }
    }
    //to print the values in the linkedlist
    display() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let str = "";
            let current = this.head;

            while (current !== null) {
                str = str + `${current.data} <---> `;
                current = current.next;
            }
            console.log(`null <---> ${str} null`);
        }
    }
    //to print in reverse
    printReverse() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let str = "";
            let current = this.tail;
            while (current) {
                str = str + `${current.data}  <---> `;
                current = current.prev;
            }
            console.log(`null <---> ${str} null`);
        }
    }
    //to get the size
    getSize() {
        return console.log(this.size);
    }
}

const ls = new LinkedList();
ls.insertFirst(1);
ls.insertEnd(12);
ls.insertEnd(13);
ls.insertEnd(10);
ls.removeFront();
ls.insertIndex(4, 2);
ls.insertAfterData(10, 5);
ls.insertBeforeData(1, 7);
ls.display();
ls.printReverse();
ls.getSize();
