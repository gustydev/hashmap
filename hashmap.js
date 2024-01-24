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
    const entryLength = this.length();
    const bucketLength = this.buckets.length;
    if (entryLength / bucketLength > 0.75) { // If larger than growth factor
      for (let i = 0; i < bucketLength; i++) { // Double amount of buckets
        this.buckets.push(new LinkedList());
      }
    }
    const entry = new Node({key, value});
    const index = this.hash(key) % (this.buckets.length);
    let currentNode = this.buckets[index].headNode;
    if (currentNode === null) {
      this.buckets[index].headNode = entry;
    } else {
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = entry;
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
  keys() {
    const keysArray = [];
    this.entries().forEach((entry) => {
      keysArray.push(entry[0]);
    })
    return keysArray;
  }
  values() {
    const valuesArray = [];
    this.entries().forEach((entry) => {
      valuesArray.push(entry[1]);
    })
    return valuesArray;
  }
  length() {
    return this.entries().length;
  }
  has(key) {
    return (this.keys().includes(key));
  }
  get(key) {
    const search = this.entries().find((e) => e[0] === key);
    if (!search) { return null } else { return search[1] }
  }
  clear() {
    this.buckets.forEach((bucket) => {
      bucket.headNode = null;
    })
  }
  remove(key) {
    let result = false;
    this.buckets.forEach((bucket) => {
      if (bucket.headNode !== null) {
        let currentNode = bucket.headNode;
        while (currentNode !== null) {
          if (currentNode.value.key === key) {
            const removedEntry = currentNode.value;
            const removedIndex = bucket.find(removedEntry);
            bucket.removeAt(removedIndex);
            result = true;
          }
          currentNode = currentNode.next;
        }
      }
    })
    return result;
  }
}

const test = new HashMap();
test.set('1', 'a')
test.set('2', 'b')
test.set('3', 'c')
test.set('4', 'd')
test.set('5', 'e')
test.set('6', 'f')
test.set('7', 'g')
test.set('8', 'h')
test.set('9', 'i')
test.set('10', 'j')
test.set('11', 'k')
test.set('12', 'l')
test.set('13', 'm')
test.set('14', 'n')
test.set('15', 'o')
test.set('16', 'p')
test.set('17', 'q')
test.set('18', 'r')
test.set('19', 's')
test.set('20', 't')
test.set('21', 'u')
test.set('22', 'v')
test.set('23', 'w')
test.set('24', 'x')
test.set('25', 'y')
test.set('26', 'z')
test.set('27', 'a1')
test.set('28', 'b1')
test.set('29', 'c1')
test.set('30', 'd1')

console.log(test)
console.log(test.entries())
console.log(test.length())
console.log(test.buckets.length)