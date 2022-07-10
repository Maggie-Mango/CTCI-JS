const LinkedList = require("../util/linkedList");

//Remove dup fron an unsorted linkedlist
const removeDups = (lList) => {
  let visited = {};
  let newSize = 0;
  let current = lList.head;
  //if the first value is unique, start the counter at 1, otherwise it will be accounted for
  if (current.val !== current.next.val) {
    newSize++;
  }
  while (current.next) {
    if (visited[current.next.val]) {
      current.next = current.next.next;
    } else {
      visited[current.next.val] = true;
      current = current.next;
    }
  }
  newSize += Object.keys(visited).length;
  lList.size = newSize;
  return lList.printList();
}




//testing
let list = new LinkedList();
for (let e of [1, 2, 3, 4, 4, 5, 6, 6, 6, 6, 7, 8, 8]) {
  list.add(e);
}

removeDuplicates(list);