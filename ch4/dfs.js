class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const dfs = (root) => {
  if (root === null) return [];
  const stack = [ root ];
  let result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
}

 //recursion - under the hood it uses a call stack
const dfs = (root) => {
  if (root === null) return null;
  const left = dfs(root.left);
  const right = defs(root.right);
  return [root.val, ...left, ...right];
}