 const fibonacci = (num) => {
  if (num <= 2) return 1;
  //sum of number before + number before before
  return fibonacci(num - 1) + fibonacci(num - 2);
 }