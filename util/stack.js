
//LIFO

//constant time add and removes

class Stack {
  constructor() {
    this.data = [];
  }

  pop() {
    if (this.data.length > 0) {
      return this.data.pop();
    }
  }

  push(val) {
    return this.data.push(val);
  }

  peek() {
   return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length == 0;
  }
}

module.exports = Stack;