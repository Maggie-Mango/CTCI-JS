
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.right = (right===undefined ? null : right);
  this.left = (left===undefined ? null : left);
}

//two arrays
const buildTree = (preorder, inorder) => {
  if (!preorder || !inorder) return null;

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(root.val);

  //recursion
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), ionrder.slice(mid + 1));
  return root;
}