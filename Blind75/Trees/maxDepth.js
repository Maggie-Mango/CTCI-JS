const maxDepth = (root) => {
  if (root === null) return root;
  const depth = 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  return depth;
}