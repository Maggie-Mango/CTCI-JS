var longestCommonSubsequence = function(text1, text2) {
  if (text1.length === 0 || text2.length === 0) return 0;
  const dp = [];
  let max = 0;
  for (let i = 0; i <= text1.length; i++) {
      dp.push(new Array(text2.length + 1).fill(0))
  }
  console.log(dp)
  for (let i = 1; i < dp.length; i++) {
      for (let j = 1; j < dp[0].length; j++) {
          if(text1[i - 1] === text2[j - 1]) {
              console.log('here ', dp[i - 1][j - 1])
              dp[i][j] = dp[i - 1][j - 1] + 1;
          } else {
              dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
          }
          max = Math.max(max, dp[i][j])
      }
  }
  console.log(dp)
  return max;
};