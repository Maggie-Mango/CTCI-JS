const LinkedList = require("../util/linkedList");


//Find the kth to the last element of a singly linked list

const kthElement = (k, linkedList) => {
  let curr = linkedList;
  curr.next = linkedList.head;
  let slow = curr;
  let fast = curr;

  while (k  > 0) {
    fast = fast.next;
    k--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.next;

}




//testing
let list = new LinkedList();
for (let e of [1, 2, 3, 4, 5, 6, 7, 8, 8]) {
  list.add(e);
}

console.log(kthElement(3, list)); //returns node with value 7