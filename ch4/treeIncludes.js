//BFS
const treeIncludes = (root, target) => {
  if (root === null) return false;
  const queue = [ root ];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right)
  }
  return false;
};


//recursive (super clean) DFS

const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  const left = treeIncludes(root.left, target);
  const right = treeIncludes(root.right, target);

  return left || right;
}