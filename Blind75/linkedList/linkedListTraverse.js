// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
    let values = [];
    fillValues(head, values);
    return values;
  };
  
  const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val)
    fillValues(head.next, values);
    
  }
  
  module.exports = {
    linkedListValues,
  };