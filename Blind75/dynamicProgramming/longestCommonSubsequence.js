var longestCommonSubsequence = function(text1, text2) {
  if (text1.length === 0 || text2.length === 0) return 0;
  const dp = [];
  let max = 0;
  for (let i = 0; i <= text1.length; i++) {
      dp.push(new Array(text2.length + 1).fill(0))
  }
  for (let i = 1; i < dp.length; i++) {
      for (let j = 1; j < dp[i].length; j++) {
          if(text1[i - 1] === text2[j - 1]) { //bc were setting table to be length 1 more, need i - 1
              dp[i][j] = dp[i - 1][j - 1] + 1; //set the previous one to +1
          } else { //get the max of the above char or left char
              let aboveChar = dp[i - 1][j];
              let leftChar = dp[i][j - 1]
              dp[i][j] = Math.max(aboveChar, leftChar)
          }
          max = Math.max(max, dp[i][j])
      }
  }

  return max;
};
//helpful https://www.youtube.com/watch?v=bocaOl7hvTY