const nestedArr = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    if(Array.isArray(arr[i])) {
      sum += nestedArr(current)
    } else {
      sum += current
    }
  }
  return sum;

}


const factorial = (num) => {

  if (num < 2) return 1

  return num * factorial(num - 1)

}