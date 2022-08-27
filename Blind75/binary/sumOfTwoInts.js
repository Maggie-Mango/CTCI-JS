var getSum = function(a, b) {
  //& only shows positions need to carry.
  //XOR - simulates addition
  //<< left shift operator
  let carry;
  while (b !== 0) {
      carry = a & b; //creates thecarry
      a = a ^ b; //performs the addition
      b = carry << 1; //shifts 1 bit to the left, shifting in zeros from the right
  }
  return a;
};

/*
1. find carries
2."Do the addition"
3.B holds left shiftec carry

We're going to add a against b, with b holding the carry
*/