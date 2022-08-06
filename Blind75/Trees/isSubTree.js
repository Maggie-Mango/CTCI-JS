const isSubTree = (tree, subTree) => {
  if (tree === null) return false;
  if (sameTree(tree, subTree) || subTree === null) return true;
  return isSubTree(tree.left, subTree) || isSubTree(tree.right, subTree);
}

const sameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return sameTree(p.left, q.left) && sameTree(p.right, q.right);
}