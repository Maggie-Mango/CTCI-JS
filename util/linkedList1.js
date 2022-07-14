class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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

  indexOf(element) {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (current.val === element) {
        return count;
      }
      count++
      current = current.next;
    }
    return -1;
  }

  removeElement(element) {
    let curr = this.head;
    let prev = this.null;

    while (cur !== null) {
      //if element found
      if (curr.val === element) {
        if (prev === null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.val;
      }
      prev = curr;
      curr = curr.next;
    }
    return -1;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log('invalid index')
    } else {
      let curr, prev, it = 0;
      curr = this.head;
      prev = curr;

      //delete first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        //iterate over the list to the
        //position to remove an element
        while (it < index) {
          it++
          prev = curr;
          curr = curr.next;
        }
        //remove the element
        prev.next = curr.next;
      }
      this.size--;
      return curr.val;
    }
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