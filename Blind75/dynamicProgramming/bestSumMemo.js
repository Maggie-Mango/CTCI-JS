const bestSum = (target, nums, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  let shortestCombo = null;
  for (let num of nums) {
    const remainder = sum - num;
    const remainderCombo = bestSum(remainder, nums);

    if (remainderCombo !== null) {
      const combo = [ ...remainderCombo, num ];
      //if combo is shorter than the current "shortest", update it
      if (shortestCombo === null || combo.length < shortestCombo.length) {
        shortestCombo = combo;
      }
    }
  }
  memo[target] = shortestCombo;
  return shortestCombo;
}

//m = target sum
//n = numbers.length


//Brute Force
//time: O(n^m)