//*******************Cracking the Coding Interview Exercises**************************

//1.1 - is Unique

const isUnique = (str) => {
  str = str.split('')
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
    } else {
      return false
    }
  }
  return true
}

//1.2 check Permutation
const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }

 return str1.split('').sort().join() === str2.split('').sort().join()
}
//time complexity o(logn) - they inrease in running time depending on input size,
//but not as quickly as linear time


module.exports = {
  isUnique,
  isPermutation
}