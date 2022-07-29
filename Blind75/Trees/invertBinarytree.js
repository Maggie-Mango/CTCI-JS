const invert = (root) => {
  if (root === null) return root;
  const temp = root.left;
  root.left = invert(root.right);
  root.right = invert(temp);

  return root;
}