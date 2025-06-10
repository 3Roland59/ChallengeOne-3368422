class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.children[index]) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        const node = this._findNode(word);
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix) {
        return this._findNode(prefix) !== null;
    }

    _findNode(prefix) {
        let node = this.root;
        for (const char of prefix) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.children[index]) {
                return null;
            }
            node = node.children[index];
        }
        return node;
    }
}

// Example usage
const commands = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"];
const inputs = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];
const output = [];

let trie = null;

commands.forEach((command, i) => {
    if (command === "Trie") {
        trie = new Trie();
        output.push(null);
    } else if (command === "insert") {
        trie.insert(inputs[i][0]);
        output.push(null);
    } else if (command === "search") {
        output.push(trie.search(inputs[i][0]));
    } else if (command === "startsWith") {
        output.push(trie.startsWith(inputs[i][0]));
    }
});

console.log("Output:", output);
