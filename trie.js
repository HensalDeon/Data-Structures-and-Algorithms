class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let currentNode = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char);
        }

        currentNode.isEndOfWord = true;
    }

    search(word) {
        let currentNode = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
        }

        return currentNode.isEndOfWord;
    }

    allPrefix(word) {
        let currentNode = this.root;
        let prefix = "";
        let result = [];

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!currentNode.children.has(char)) {
                break;
            }
            prefix += char;
            currentNode = currentNode.children.get(char);
            if (currentNode.isEndOfWord) {
                result.push(prefix);
            }
        }

        this.dfs(currentNode, prefix, result);

        return result;
    }
    dfs(currentNode, prefix, result) {
        if (currentNode.isEndOfWord) {
            result.push(prefix);
        }

        const keys = Array.from(currentNode.children.keys());
        for (let i = 0; i < keys.length; i++) {
            const char = keys[i];
            const childNode = currentNode.children.get(char);
            this.dfs(childNode, prefix + char, result);
        }
    }

    startsWith(prefix) {
        let currentNode = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
        }

        return true;
    }
}

// Usage example:
const trie = new Trie();

trie.insert("apple");
trie.insert("banana");
trie.insert("orange");
trie.insert("oracle");
trie.insert("orangutan");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("grape")); // Output: false

console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ban")); // Output: true
console.log(trie.startsWith("ora")); // Output: true
console.log(trie.startsWith("gr")); // Output: false
console.log(trie.allPrefix("ora"));
