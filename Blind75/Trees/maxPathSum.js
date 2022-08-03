//this works on leetcode testcases
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

//this works on algoex test cases
function maxPathSum(tree) {
  let max = -Infinity;
  const findSums = (node) => {
    if (node === null) return 0;
    let left =  Math.max(0, findSums(node.left));
    let right = Math.max(0, findSums(node.right));
    let allSums = left + right + node.value;

    max = Math.max(max, allSums);

    return Math.max(left, right) + node.value;
  }
  findSums(tree);
  return max;
}