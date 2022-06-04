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


function insertionSort(nums) {

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let j;
    for (j = i - 1; j >= 0 && nums[j] > current; j--) {
      nums[j + 1] = nums[j]
    }

    nums[j + 1] = current;
  }
  return nums;
}