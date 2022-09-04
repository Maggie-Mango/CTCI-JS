//#leetcode 300
//not optimum, loop through twice,
//T - On^2
//S - On
var lengthOfLIS = function(nums) {
  let dp = new Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
          if (nums[i] > nums[j]) {
              dp[i] = Math.max(dp[i], dp[j] + 1) //add one to the prevous if it's more
          }
      }
  }
     let longest = 0;
     for (let num of dp) {
         longest = Math.max(longest, num)
     }
     return longest
 };