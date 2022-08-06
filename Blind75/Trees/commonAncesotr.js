//clever: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/discuss/541362/JavaScript-Iterative-Recursive
//o(H), o(H)
const lowestCommonAncestor = (root, p, q) => {
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);

  return root;
}