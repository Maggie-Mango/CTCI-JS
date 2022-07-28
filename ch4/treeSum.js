const treeSum = (root) => {
  if (root === null) return 0;

   return root.val + treeSum(root.left) + treeSum(root.right);
 };

 module.exports = {
   treeSum,
 };

 /*
 const treeSum = (root) => {
 if (root === null) return 0;

  return root.val + treeSum(root.left) + treeSum(root.right);
};

module.exports = {
  treeSum,
};
*/
