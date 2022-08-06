//inorder solution https://leetcode.com/problems/validate-binary-search-tree/discuss/621513/JavaScript-Intuitive-Solution-Using-InOrder-Traversal

//one way to solve it

const isValidBST = (root) => {
  let valid = true;

  const dfs = (node, min, max) => {
    if (!node) return;

    if (node.val <= min || node.val >= max) {
      valid = false;
      return;
    }
    dfs(node.left, min, node.val);
    dfs(node.right, node.val, max);
  }
  dfs(root, -Infinity, Infinity);
  return valid;
}

