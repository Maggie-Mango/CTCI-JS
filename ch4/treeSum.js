const treeSum = (root) => {
  if (root === null) return 0;

   return root.val + treeSum(root.left) + treeSum(root.right);
 };

 module.exports = {
   treeSum,
 };

const treeSum = (root) => {
  if (root === null) return 0;
  let stack = [ root ];
  let sum = 0;
  while (stack.length > 0) {
    const current = stack.pop()
    sum += current.val;
    if (current.left) stack.push(current.left)
    if (current.right) stack.push(current.right)
  }
  return sum;
};

module.exports = {
  treeSum,
};

