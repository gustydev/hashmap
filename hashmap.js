import { Node, LinkedList } from "./node_modules/linkedlist-gusty/linkedList.js";
console.log(Node, LinkedList)
class HashMap {
    constructor() {
        
    }
    hash(string) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < string.length; i++) {
          hashCode = primeNumber * hashCode + string.charCodeAt(i);
        }
        return hashCode;
    }
}

const test = new HashMap();
console.log(test.hash('goblin'))
console.log(test.hash('Goblin'))