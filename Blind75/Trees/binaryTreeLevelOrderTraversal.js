//input tree root
//output left to right, level to level

var levelOrder = function(root) {
  if (root === null) return null;
  //breadth first
  let levels = [ ];
  let queue = [ root ];

  while (queue.length > 0) {
    let row = [ ];
    for (let i = 0; i < queue.length; i++) {
        let current = queue.shift();
        row.push(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    levels.push(row);
  }
  return levels;
};