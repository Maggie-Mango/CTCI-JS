var countBits = function(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
      arr.push(i.toString(2).split("1").length - 1)
  }
  return arr;
};