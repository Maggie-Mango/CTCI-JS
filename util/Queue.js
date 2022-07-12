class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  //acting like push to the end of an array
  add(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //this.last.next modifies the object reference of the previous newNode, whose memory address is same as this.first
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this.size++;
  }

  remove() {
    if (!this.head) return null;
    const temp = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;

    return temp.val;
  }

  peek() {
    return this.head.val;
  }

  isEmpty() {
    return this.head === null;
  }
}


module.exports = Queue;