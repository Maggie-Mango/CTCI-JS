//leetcode 39.
var combinationSum = function(candidates, target) {
  let result = [];

  findCombo();
  return result;

  function findCombo(start = 0, sum = 0, ans = []) {
      if (sum > target) return;
      if(sum === target) {
          result.push(ans.slice())
      }

      for (let i=start; i<candidates.length; i++) {
          findCombo(i, sum + candidates[i], [...ans, candidates[i]]);
      }
  }

};