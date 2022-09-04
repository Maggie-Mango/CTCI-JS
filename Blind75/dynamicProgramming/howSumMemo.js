//takes in a target sum and array of numbers
//return array containing any combo of elements that add up to targetsum
//if there are multiple posibilities you can return just 1

function howSum(target, nums, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of nums) {
    const remainder = target - num;
    const remainderResult = howSum(remainder, nums);
    if (remainderResult !== null) {
      memo[target] = [...remainderResult, num]; //*m - this line creates a copy of an array (linear number of steps)
      return memo[target]
    }
  }
  memo[target] = null
  return null;
};

//without memo time: O(n^m * m) space: o(m)
//memoized time: O(n * m) space: o(m*m)


howSum(8, [2, 3, 5]) // [2, 2, 2, 2] or [3, 5]
howSum(0, [1, 2, 3]) //returns []