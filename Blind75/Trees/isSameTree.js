const isSameTree = (p, q) => {
  //null
  if (!p && !q) return true;
  //base cases
  if (!p || !q || p.val !== q.val) return false;
  //recursion
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}