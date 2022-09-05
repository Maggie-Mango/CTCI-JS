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



 //more optimized solution
 /*
 Algorithm

Initialize an array sub which contains the first element of nums.

Iterate through the input, starting from the second element. For each element num:

If num is greater than any element in sub, then add num to sub.
Otherwise, perform a binary search in sub to find the smallest element that is greater than or equal to num. Replace that element with num.
Return the length of sub.

t = O(n * log(n))
space = o(n)
*/



 var lengthOfLIS = function(nums) {
  let sub = [ nums[0] ];
  for (let i = 1; i <  nums.length; i++) {
      let num = nums[i];
      if (num > sub[sub.size - 1]) {
          sub.push(num)
      } else {
          const j = binarySearch(sub, num); //bst to find smallest element grater than or equal to num
          sub[j] = num;
      }
  }
  return sub.length;
};

const binarySearch = (arr, curr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] < curr) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return left;
}