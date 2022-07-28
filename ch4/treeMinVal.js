const treeMinValue = (root) => {
  const stack = [ root ];
  let min = Infinity
  while (stack.length > 0) {
    const current = stack.pop();
    min = Math.min(min, current.val);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return min;
};

const treeMinValue = (root) => {
  let smallest = Infinity;
  const queue = [ root ];
  while (queue.length > 0) {
    const current = queue.shift();
    smallest = Math.min(smallest, current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return smallest;
};

const treeMinValue = (root) => {
  if (root === null) return Infinity;

  const left = treeMinValue(root.left);
  const right = treeMinValue(root.right);

  return Math.min(root.val, left, right);

};



module.exports = {
  treeMinValue,
};
