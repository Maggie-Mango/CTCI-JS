//input tree root
//output left to right, level to level

var levelOrder = function(root) {
  if (root === null) return [];
  //breadth first
  let levels = [ ];
  let queue = [ root ];

  while (queue.length > 0) {
    let row = [ ];
      //this variable needs to exist
      let len = queue.length;
    for (let i = 0; i < len; i++) {
        let current = queue.shift();
        row.push(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    levels.push(row);
  }
  return levels;
};