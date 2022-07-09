

class Queue {
  constructor() {
    this._list = new LinkedList();
  }

  enqueue(value) {
    this._list.apppend(value);
    return node.value;
  }

  dequeue() {
    let node = this._list.popFirst()
  }
}