class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(val) {
    let node = new Node(val);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.val;
      current = current.next;
    }
    console.log("linked list: ", str)
  }
}

//other methods found here as needed https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
/*testing
const test = new LinkedList();
console.log(test.add(5))
console.log(test.add(7))
console.log(test.add(8))
console.log(test.add(32))
console.log(test.printList())
*/

module.exports = LinkedList;