const canSum = (n, target, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of n) {
    const remainder = target - num;
    if (canSum(remainder, n, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}