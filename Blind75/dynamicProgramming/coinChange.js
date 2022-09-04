var coinChange = function(coins, amount) {
  coins.sort((a, b) => b - a);
  let globalTot = -1;

  findTotal(0, 0, 0)
  return globalTot
  function findTotal(start, sum, total) {

      if (sum > amount) return;
      if (sum === amount) {
          if (globalTot === -1) {
              globalTot = total
          } else if (globalTot !== -1 && total < globalTot) {
              globalTot = total;
          }
          return;
      }
      for (let i = 0; i < coins.length; i++) {
          //if (coins[i] > amount) return;
          findTotal(i, sum + coins[i], total + 1)
      }
  }


  return -1;
};