function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let triplet = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplet.push([array[i], array[left], array[right]])
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplet;
}

//edited to watch out for dups (leetcode)
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let target = 0;
  let triplet = [];
  for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
          const current = nums[i] + nums[left] + nums[right];

          if (current === target) {
              triplet.push([nums[i], nums[left], nums[right]]);
              while (nums[left + 1] === nums[left]) left++;
              while (nums[right - 1] === nums[right]) right--;
              left++;
              right--;
          } else if (current < target) {
              left++;
          } else if (current > target) {
              right--;
          }

      }
      while (nums[i + 1] === nums[i]) i++;
  }
  return triplet;
};