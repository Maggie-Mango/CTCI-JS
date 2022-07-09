const LinkedList = require("../util/linkedList");

//Remove dup fron an unsorted linkedlist
const removeDups = (lList) => {
  let visited = {}
  let curr = lList.head;
  while (curr) {
    if (visited[curr.val]) {
      curr = curr.next;
    } else {
      visited[curr.val] = true;
      curr = curr.next;
    }
  }
  console.log(visited)
}




//testing
let list = new LinkedList();
for (let e of [1, 2, 3, 4, 4, 5, 6, 6, 6, 6, 7, 8, 8]) {
  list.add(e);
}

removeDuplicates(list);