//input tree root
//output left to right, level to level

var levelOrder = function(root) {
  if (root === null) return null;
  //breadth first
  let levels = [ ];
  let queue = [ root ];
  while (queue.length > 0) {
    let level = [];
    const current = queue.shift();
    level.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    levels.push(level);
  }
  return levels;
};