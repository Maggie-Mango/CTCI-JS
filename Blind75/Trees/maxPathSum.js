const maxPathSum = (root) => {
  let max = -Infinity;

  const findSums = (node) => {
    if (node === null) return 0;

    let left = findSums(node.left);
    let right = findSums(node.right);
    let allSums = left + right + node.val;
    let leftNodes = left + node.val;
    let rightNodes = right + node.val;

    max = Math.max(leftNodes, rightNodes, node.val, max, allSums);

    return Math.max(leftNode, rightNode, node.val);
  }
  return fundSums(root);
  return max;

}