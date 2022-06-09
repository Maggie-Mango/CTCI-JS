//time complexity is n squared
//space is c

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

//time complexiy is n squared, space is c
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


//Merge sort uses recursion//
//time complexity o log n / space is n
const mergeSort = (nums) => {
  //base case, when arr is length 1 or 0 return it
  if (nums.length === 1 || nums.length === 0) return nums;
  //split the array into two smaller arrays and merge them
  let middle = Math.floor(nums.length / 2);
  let left = nums.slice(0, middle);
  let right = nums.slice(middle);

  return merge( mergeSort(left), mergeSort(right) );
}

const merge = (left, right) => {

  let mergedArr = [];
  while (left && right) {
    if (left[0] <= right[0]) {
      mergedArr.push(left.shift())
    } else {
      merged.push(right.shift())
    }
  }

  return mergedArr.concat(left, right);

}
//****************************** *//

//n log n, you're not comparing everything against each other, just comparing to the pivot

const quickSort = (nums) => {
  //base case
  if (nums.length === 0 ||  nums.length === 1) {
    return nums
  }

  const pivot = nums[nums.length - 1]
  const left = []
  const right = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return left.concat(pivot, right)



}