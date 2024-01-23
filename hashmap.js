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
  set(key, value) {
    let filledBuckets = 0;
    this.buckets.forEach((bucket) => {
    if (bucket.headNode !== null) {
      filledBuckets += 1;
      }
    });
    if (filledBuckets / this.buckets.length > 0.75) { // If larger than growth factor
      for (let i = 0; i < this.buckets.length; i++) { // Double amount of buckets
        this.buckets.push(new LinkedList());
      }
    }
    const bucket = new Node();
    bucket.value = {key: value};
    this.buckets[this.hash(key) % (this.buckets.length)].headNode = bucket;
  }
}

const test = new HashMap();
test.set('test', 'nananananana')
test.set('Banana', 'Froot')
console.log(test)