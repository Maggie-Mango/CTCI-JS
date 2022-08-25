var maxProduct = function(nums) {
  let product = nums[0];
  let currMin = nums[0]
  let currMax = nums[0];
  let prevMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
      prevMax = currMax * nums[i];
      currMax = Math.max(nums[i], prevMax,  currMin * nums[i]);
      currMin = Math.min(nums[i], prevMax, currMin * nums[i]);

      product = Math.max(product, currMax);
  }
  return product;
};