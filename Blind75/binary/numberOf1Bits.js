//O(1) since n is a 32 bit integer
//0(1) space

var hammingWeight = function(n) {
  let shift = 1;
  let bits = 0;
  for (let i = 0; i < 32; i++) {
      if ((n & shift) !== 0) {
          bits++;
      }
      shift = shift << 1; //will keep shifting 1 all the way to the left
  }
  return bits;
};

//bitmanipulation
//read about n & (n - 1) trick on LC
var hammingWeight = function(n) {

  let bits = 0;
  while (n !== 0) {
      bits++;
      n &= (n - 1)
  }
  return bits;
};
