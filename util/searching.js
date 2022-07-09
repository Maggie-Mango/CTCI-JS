const binarySearch = (nums, target) => {
  let min = 0;
  let max = nums.length - 1;
  let mid;
  while (min <= max) {
    let mid = Math.floor( (min + max) / 2 );
    if (nums[mid] < target) {
      mid = min++
    } else if (nums[mid] > target) {
      mid = max--
    } else {
      return mid
    }
  }

}

function linearSearch(id, array) {
  for (let i = 0; i < array.length; i++) {
    if (id === array[i].id) {
      return array[i]
    }
  }
  return void 0;
}

//Binary search tree
class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let current = this.root;
      while(true) {
        if (current.value > value) {
          //go left
          if (current.left) {
            current = current.left;
          } else {
            current.left = new Node(value);
            break;
          }
        } else {
          //go right
          if (current.right) {
            current = current.right;
          } else {
            current.right = new Node(value);
            break;
          }
        }
      }
    }
    //return the tree
    return this;
  }


}


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  serialize() {
    const ans = { value: this.value};
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    return ans;
  }
}