const bestSum = (target, nums) => {
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
  return shortestCombo;
}