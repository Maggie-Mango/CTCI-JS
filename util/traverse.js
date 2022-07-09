/*3 functions that are depth first*/

const preorderTraverse = (node, array) {
  if (!node) return array;
  array.push(node.value);
  array = preorderTraverse(node.left, array);
  array = preorderTraverse(node.right, array);
  return array;
}

const inorderTraverse = (node, array) {
  if (!node) return array;
  array = inorderTraverse(node.left, array);
  array.push(node.value);
  array = inorderTraverse(node.right, array);
  return array;
}

cost postorderTraverse = (node, array) {
  if (!node) return array;
  array = postorderTraverse(node.left, array);
  array = postorderTraverse(node.right, array);
  array.push(node.value);
  return array;
}

/* tree
const tree = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }
    }
  };
  */

  //breadth first
  const breadthFirstTraverse = (queue, array) => {
    if (!queue.length) return array;

    const node = queue.shift();
    array.push(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    return breadthFirstTraverse(queue, array);
  };

  //breadthFirst again
  const breadthFirstTraverse2 = (queue, array) => {

    while (queue.length) {
      const node = queue.shift();
      array.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return array;
  }


  //BST minHeightBst
  //construct a BST from integers in array and return root of BST
  //should MINIMIZE the height of the BST
  //you are provided BST class used to construct BST








  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }

