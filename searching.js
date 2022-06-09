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