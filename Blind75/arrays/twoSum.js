const twoSum = function(num, target) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let difference = target = nums[i];

    if (map.get(difference) !== undefined) {
      result.push(i, map.get(difference));
      break;
    } else {
      map.set(nums[i], i);
    }
  }
  return result;
}