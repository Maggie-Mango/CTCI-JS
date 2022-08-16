// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
  let idx = 0;
  let current = head;
  while (current !== null) {
    if (idx === index) return current.val;
    current = current.next;
    idx++;
  }
  return null;
};

module.exports = {
  getNodeValue,
};
