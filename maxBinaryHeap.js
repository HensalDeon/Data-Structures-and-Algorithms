class MaxBinaryHeap {
    constructor() {
        this.heap = [];
    }

    insert(element) {
        this.heap.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element <= parent) break;
            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }

    remove() {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        const lastElement = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.heapfiy(0);
        }
        return max;
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChild(i) {
        return 2 * i + 1;
    }

    rightChild(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapfiy(i) {
        const left = this.leftChild(i);
        const right = this.rightChild(i);
        let largest = i;
        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;  
        }
        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
        if (largest !== i) {
            this.swap(i, largest);
            this.heapfiy(largest);
        }
    }

    buildHeap(array) {
        this.heap = array;
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.heapfiy(i);
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(45);
heap.insert(50);
heap.insert(35);
heap.insert(46);
heap.insert(10);
console.log(heap.remove());
console.log(heap.heap);

//for converting an unsorted array to max Heap
const array = [4,6,3,5,8,10];
heap.buildHeap(array)
console.log(heap.remove());
console.log(heap.heap);