function bubbleSort(nums) {
  // code goes here
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      let temp = nums[i]
      if (temp > nums[i + 1]) {
        //swap them
        nums[i] = nums[i + 1]
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped)
  return nums
}