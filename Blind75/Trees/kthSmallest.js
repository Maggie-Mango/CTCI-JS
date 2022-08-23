
//O(N) - traversing through tree once
//O(N) - adding N amount to array
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


const kthSmallest = (root, k) => {
  //global results
  let res = [];
  dfs(root, res);
  return res[k - 1];
}

const dfs = (node, res) => {
  //inorder to get the nodes in order
  if (!node) return;
  if (node.left) dfs(node.left);
  res.push(node.val);
  if (node.right) dfs(node.right);
}

///
function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  const res = [];
  dfs(tree, res)
  return res[res.length - k]
}

const dfs = (node, res) => {
  if (node === null) return;

  if (node.left) dfs(node.left, res);
  res.push(node.val);
  if (node.right) dfs(node.right, res);
}