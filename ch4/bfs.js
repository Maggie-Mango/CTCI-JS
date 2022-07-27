class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
//time - O(n)
//space - O(n )
const bfs = (root) => {
  if (root === null) return [];
  let result = [];
  const queue = [ root ];
  while (queue.length > 0) {
    const current = queue.shift();
    queue.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return result;
}