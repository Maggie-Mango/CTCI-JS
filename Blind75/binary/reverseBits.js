var reverseBits = function(n) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
      ans <<= 1;
      ans |= n & 1;
      n >>= 1;
  }
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift
  return ans >>> 0;
};