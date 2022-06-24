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



}


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}