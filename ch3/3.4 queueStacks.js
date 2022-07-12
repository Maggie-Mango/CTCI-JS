const LinkedList = require("../util/Queue");

//3.4 - implement a Queue with 2 stacks
class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(val) {
   if (this.stack1.data.length < 1) {
     this.stack1.push(val)
   } else {
     this.stack2.push(val)
   }
    return this.stack1.data + ','+ this.stack2.data
  }

  dequeue() {
    let num = this.stack1.pop()
    let newVal = this.stack2.data[0];
    this.stack1.push(newVal);
    this.stack2.data.splice(0, 1)
    return num
  }

  peek() {
    return this.stack1.data;
  }



}

let test = new Queue();
console.log(test.enqueue(1))
console.log(test.enqueue(2))
console.log(test.enqueue(3))
console.log(test.enqueue(4))
console.log(test.dequeue())
