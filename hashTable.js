class HashTable {
    constructor(size) {
        this.tableArray = new Array(size);
        this.size = size;
    }

    //to create an unique code/index number
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        //to make sure that the size in range
        return hash % this.size; 
    }

    //to set a key value pair/update the key value
    set(key, value) {
        const index = this.hash(key);
        if (!this.tableArray[index]) {
            this.tableArray[index] = [[key, value]]
        } else {
            const bucket = this.tableArray[index];
            const sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    //to get the value from the key value pair
    get(key) {
        const index = this.hash(key);
        const bucket = this.tableArray[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    //to remove a key value pair
    remove(key) {
        const index = this.hash(key);
        const bucket = this.tableArray[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0]===key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }

    //to display the key value pair
    display() {
        for (let i = 0; i < this.tableArray.length; i++) {
            if (this.tableArray[i]) {
                console.log(i, this.tableArray[i]);
            }
        }
    }
}
const table = new HashTable(50);

table.set("name", "Hensal");
table.set("age", 23);
table.display();

console.log(table.get("name"));
table.set("mane", "deon");
table.remove('name')

table.display();
