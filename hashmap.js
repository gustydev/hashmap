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
    })
    if (filledBuckets / this.buckets.length > 0.75) { // If larger than growth factor
      for (let i = 0; i < this.buckets.length; i++) { // Double amount of buckets
        this.buckets.push(new LinkedList());
      }
    }
    const entry = new Node({key, value});
    const index = this.hash(key) % (this.buckets.length);
    const currBucket = this.buckets[index].headNode;
    if (currBucket === null) {
      this.buckets[index].headNode = entry;
    } else {
      currBucket.next = entry;
    }
  }
  entries() {
    const pairs = [];
    this.buckets.forEach((bucket) => {
      let currentNode = bucket.headNode;
      if (currentNode !== null) {
        pairs.push([currentNode.value.key, currentNode.value.value]);
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
          pairs.push([currentNode.value.key, currentNode.value.value])
        }
      }
    })
    return pairs;
  }
}

const test = new HashMap();
test.set('test', 'nananananana')
test.set('Banana', 'Froot')
test.set('Banana', 'fruity')

console.log(test)
console.log(test.entries());