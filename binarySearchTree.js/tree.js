class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }
    //to insert a value/Node
    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    //to search in a binary tree
    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    //Traversal (dfs traversal)
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
    // BFS traversal
    levelOrder() {
        //use the optimised queue implemention
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root == null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    // Binary search tree validation
    isValidBST(root, min, max) {
        if (!root) {
            return true; // empty tree is a valid BST
        }

        if (root.value <= min || root.value >= max) {
            return false; // node value violates the BST property
        }

        // recursively check the left and right subtrees
        return this.isValidBST(root.left, min, root.value) && this.isValidBST(root.right, root.value, max);
    }

    findClosestValue(root, target) {
        let closestValue = root.value;
        let minDiff = Math.abs(target - root.value);

        // Recursive function to update closestValue and minDiff
        function dfs(node) {
            if (node === null) {
                return;
            }

            // Update closestValue if the current node's value is closer to the target
            if (Math.abs(target - node.value) < minDiff) {
                closestValue = node.value;
                minDiff = Math.abs(target - node.value);
            }

            // Recurse on the left and right subtrees
            if (target < node.value) {
                dfs(node.left);
            } else {
                dfs(node.right);
            }
        }

        dfs(root);

        return closestValue;
    }
}

const bst = new binarySearchTree();
////to check bst validation
// bst.root = new Node(20);
// bst.root.left = new Node(10);
// bst.root.right = new Node(30);
// bst.root.left.left = new Node(8);
// console.log(bst.isValidBST(bst.root, -Infinity, Infinity));

bst.insert(50);
bst.insert(40);
bst.insert(60);
bst.insert(30);
bst.insert(45);

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 20));
console.log(bst.search(bst.root, 1));
console.log(bst.search(bst.root, 30));
console.log(bst.search(bst.root, 40));

bst.delete(45);

console.log("preOrder traversal");
bst.preOrder(bst.root);

console.log("inOrder traversal");
bst.inOrder(bst.root);

console.log("postOrder traversal");
bst.postOrder(bst.root);

console.log("bfs traversal");
bst.levelOrder();

console.log(`minimum value : ${bst.min(bst.root)}`);
console.log(`maximum value : ${bst.max(bst.root)}`);

console.log(`closest value: ${bst.findClosestValue(bst.root, 49)}`);
