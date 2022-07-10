const LinkedList = require("../util/linkedList");

//check if linked list is a palindrome
const palindromeLinkedList = (list) => {
  let queue = [];
  let node = list.head;
  let prev;
  while (node) {
    if (queue.indexOf(node.val) > -1) {
      let val = queue.pop();
      if (node.val !== val && prev.val !== val) {
        return false;
      }
    } else {
      queue.push(node.val);
      prev = node;
      node = node.next;
    }
  }
  if (queue.length === 1) {
    return true;
  }
  return false;
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