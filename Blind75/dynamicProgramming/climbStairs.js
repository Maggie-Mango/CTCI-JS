var climbStairs = function(n, memo = {}) {
  if (n === 0) return 0;
  if (n === 2) return 2;
  if (n === 1) return 1;
  if (n in memo) return memo[n];
  memo[n] = climbStairs(n - 2, memo) + climbStairs(n - 1, memo);
  return memo[n];
};