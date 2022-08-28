//non binary solution
var missingNumber = function(nums) {
  let length = nums.length;
  nums = new Set(nums)
  while (length > - 1) {
    if (nums.has(length)) length--;
    else break;
  }
  return length;
};


//algorithmic way n * (n + 1) / 2 where
//o(n)time -- o(1) space
var missingNumber = function(nums) {
  let length = nums.length;
  //n * (n + 1) / 2 --- algorithm
  let gsum = length * (length + 1)/2 //gets sum of 1 to n numbers
  let reduce = nums.reduce((a, b) => a + b, 0)
  return gsum - reduce;
};

//binary solution
// ^ is XOR, aka bits must be different to get 1 (but 1 and 1 is 0)
//XOR 2 same numbers it will return 0
//XOR any number other than 0 and 0, it will return that number
var missingNumber = function(nums) {
  let missing = 0;
  for (let i = 0; i < nums.length + 1; i++) {
      missing = missing ^ i;
      if (i < nums.length) {
          missing = missing ^ nums[i];
      }
  }
  return missing;
};