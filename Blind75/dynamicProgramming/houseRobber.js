//leet code # 198

//loop through
var rob = function(nums) {

  return robFrom(0, nums)
};

var robFrom = function(i, nums, memo = {}) {
  if (i in memo) return memo[i]
  if (i >= nums.length) {
      return 0;
  }

  let ans = Math.max(robFrom(i + 1, nums, memo), robFrom(i + 2, nums, memo) + nums[i])
  //either rob from the next house (i + 1, num)
  //or rob from the next house
  memo[i] = ans;
  return ans
};