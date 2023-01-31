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
        this.size = 0;
    }
    //to insert a node at the begining
    insertFirst(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        if (this.tail == null) {
            this.tail = this.head;
        }
        this.size++;
    }
    //to insert a node at the end
    insertEnd(data) {
        if (this.tail == null && this.head == null) {
            this.tail = new Node(data);
            this.head = this.tail;
        } else {
            let newNode = new Node(data);
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    // to insert at a node at specif index
    insertIndex(data, index) {
        // Edge case: if index is out of range
        if (index < 0 || index > this.size) {
            return;
        }
        // Create new node
        const node = new Node(data);

        // Special case: if index is at the beginning
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            // Set current to the node at the index-1
            let current = this.head;
            let count = 0;
            while (count < index - 1) {
                current = current.next;
                count++;
            }
            // Update the next pointers
            node.next = current.next;
            current.next = node;
        }
        // Increment the size
        this.size++;
    }

    //to insert node after a specifi value
    insertAfterData(data, value) {
        const newNode = new Node(value);
        if (this.head == null) {
            console.log("list is empty");
        } else {
            let current = this.head;
            while (current !== null) {
                if (current.data == data) {
                    newNode.next = current.next;
                    current.next = newNode;
                    this.size++;
                    return;
                }
                current = current.next;
            }
        }
    }
    //to insert node before a specific data
    insertBeforeData(data, value) {
        const newNode = new Node(value);
        if (this.head == null) {
            console.log("list is empty");
        } else {
            let current = this.head;
            if (current.data == data) {
                newNode.next = this.head;
                this.head = newNode;
                this.size++;
                return;
            }
            while (current.next != null) {
                if (current.next.data == data) {
                    newNode.next = current.next;
                    current.next = newNode;
                    this.size++;
                    return;
                }
                current = current.next;
            }
        }
    }

    //to remove duplicate
    removeDuplicates() {
        let current = this.head;
        let seen = new Set();
        let prev = null;
        while (current != null) {
            if (seen.has(current.data)) {
                prev.next = current.next;
                this.size--;
            } else {
                seen.add(current.data);
                prev = current;
            }
            current = current.next;
        }
    }

    //to get an index
    getAt(index) {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            if (count == index) {
                console.log(`data at index ${index} : ${current.data}`);
            }
            current = current.next;
            count++;
        }
        return;
    }
    //to remove at an index
    removeAt(index) {
        if (index < 0 || index > this.size) {
            return;
        } else {
            let count = 0;
            let current = this.head;
            let previous;
            // to remove first
            if (index === 0) {
                this.head = current.next;
            } else {
                while (count < index) {
                    previous = current;
                    current = current.next;
                    count++;
                }
                previous.next = current.next;
            }
        }
        this.size--;
    }

    //remove data from the node
    removeData(data) {
        if (this.head == null || (this.head == null && this.tail == null)) {
            return null;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return data;
        } else {
            let current = this.head;
            while (current.next) {
                if (current.next.data === data) {
                    // found the node to be deleted
                    if (current.next === this.tail) {
                        this.tail = current;
                        current.next = null;
                    } else {
                        current.next = current.next.next;
                        this.size--;
                    }
                    return;
                }
                current = current.next;
                this.size--;
            }
            return console.log("Not Found");
        }
    }
    //Search Data
    searchData(data) {
        if (this.head == null || (this.head == null && this.tail == null)) {
            return -1;
        } else {
            let current = this.head;
            let i = 0;
            while (current !== null) {
                if (current.data === data) {
                    return console.log(`found at index : ${i}`);
                }
                current = current.next;
                i++;
            }
        }
    }
    //to Reverse the linked list
    reverse() {
        let previous = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }

    //to Convert binary to decimal
    binaryToDecimal() {
        let current = this.head;
        let total = 0;
        while(current !== null){
            total = total*2 + current.data;
            current = current.next
        }
        return total;
    }

    display() {
        let string = "";
        let temp = this.head;
        while (temp !== null) {
            string = string + temp.data + "-->";
            temp = temp.next;
        }
        console.log(string + "null");
    }
    //clear list
    clearList() {
        this.head = null;

        this.size = 0;
    }

    displaySize() {
        return console.log(`size of the Linked List ${this.size}`);
    }
}

const ls = new LinkedList();
ls.insertFirst(1);
ls.insertFirst(2);
ls.insertFirst(3);
ls.insertEnd(4);
ls.insertEnd(20);
ls.insertIndex(9, 1);
ls.removeData(20);
ls.insertAfterData(4, 10);
ls.insertBeforeData(4, 23);
ls.getAt(0);
ls.searchData(20);
//ls.removeDuplicates();
//ls.removeAt(0);
//ls.clearList();
// ls.reverse();
//console.log(ls.binaryToDecimal());
ls.display();
ls.displaySize();
