const LinkedList = require("../util/linkedList");

//check if linked list is a palindrome
const palindromeLinkedList = (list) => {
  let slow = list.head;
  let fast = list.head;
  if (list.head == null || list.head.next == null) return true;
  //slow will get to middle of the list
  while (fast.next !== null && fast.next.next !== null) {
    console.log(slow)
    slow = slow.next;
    fast = fast.next.next;
  }
  //reverse all nodes after slow
  slow.next = reverse(slow.next);
  //reassign slow reverse linkedlist
  slow = slow.next;


  while (slow !== null) {
    if (list.head.val !== slow.val) {
      return false;
    }
    list.head = list.head.next;
    slow = slow.next;
  }
  return true;
}

const reverse = (head) => {
  //holds the reversed list
  let pre = null;
  let next = null;

  while (head !== null) {
    //store the remaining list w/o the head
    next = head.next;

    head.next = pre;
    pre = head;

    //assign remianing list back so new head points to current node
    head = next;
  }
  return pre;
}

//testing
/*
let list = new LinkedList();
for (let e of [3, 4, 5, 1, 5, 4, 3]) {
  list.add(e);
}

let list2 = new LinkedList();
list2.add(1);
list2.add(1);


let list3 = new LinkedList();
for (let e of [1, 1, 5, 7, 7]) {
  list3.add(e);
}

console.log(palindromeLinkedList(list)); // true
console.log(palindromeLinkedList(list2)); // true
console.log(palindromeLinkedList(list3)); // false
*/