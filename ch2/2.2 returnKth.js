const LinkedList = require("../util/linkedList");


//Find the kth to the last element of a singly linked list

const kthElement = (k, linkedList) => {
  let slow = linkedList.head;
  let fast = linkedList.head;
}




//testing
let list = new LinkedList();
for (let e of [1, 2, 3, 4, 5, 6, 7, 8, 8]) {
  list.add(e);
}

kthElement(3, list);