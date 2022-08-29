var uniquePaths = function(m, n, memo = {}) {
  const key = m + ',' + n;
  if (memo[key]) return memo[key]
  if (m === 0 || n === 0) return 0;
  if (n === 1 && n === 1) return 1;
  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo)
  return memo[key]
};