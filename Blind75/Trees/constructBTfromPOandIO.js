
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
  //preorder is root left right
  //inorder is left root right
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), ionrder.slice(mid + 1));
  return root;
}

//example input
//const preorder = [3,9,20,15,7]
//const inorder = [9,3,15,20,7]
//output = [3, 9, 20, null, null, 15, 7]

//good explanation: https://www.youtube.com/watch?v=gadH7h5B2dc&t=119s