//takes in a target sum and array of numbers
//return array containing any combo of elements that add up to targetsum
//if there are multiple posibilities you can return just 1

function howSum(target, nums) {
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of nums) {
    const remainder = target - num;
    const remainderResult = howSum(remainder, nums);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }
  return null;
};



howSum(8, [2, 3, 5]) // [2, 2, 2, 2] or [3, 5]
howSum(0, [1, 2, 3]) //returns []