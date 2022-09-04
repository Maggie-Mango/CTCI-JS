var coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
      for (const coin of coins) {
          if (i - coin >= 0) {
              dp[i] = Math.min(dp[i], dp[i - coin] + 1) //number of needed coins
          }
      }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
//also suseful https://anj910.medium.com/leetcode-322-coin-change-eaca56c9852c