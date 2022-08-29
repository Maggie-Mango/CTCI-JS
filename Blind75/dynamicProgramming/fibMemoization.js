//memoization - store duplicate sub problems
//use javascript object: keys will be argument to function, value will be return value


const fib = (n, memo = {}) => {
  if (n === 0) return 0;
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}