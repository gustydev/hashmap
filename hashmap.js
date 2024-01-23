import { Node, LinkedList } from "./node_modules/linkedlist-gusty/linkedList.js";

class HashMap {
    constructor() {
        this.buckets = [];
        for (let i = 0; i < 16; i++) {
          this.buckets.push(new LinkedList());
        }
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
console.log(test)