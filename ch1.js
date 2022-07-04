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

//1.3 URLify
const urlify = (str, length) => {
  const urlify = (str, length) => {
    str = str.split('')
    let whiteSp = 0
    for (let i = 0; i < length; i++) {
      str[i] === ' ' ? whiteSp += 1 : whiteSp += 0
    }
    let index = length + (whiteSp * 2)

    for (let i = length - 1; i > -1; i--) {

     if (str[i] === ' ') {
       str[index - 1] = 0
       str[index - 2] = 2
       str[index - 3] = '%'
       index -=3
     } else {
       str[index - 1] = str[i]
       index -= 1
     }
    }
    return str.join('')
  }
}

const palindromePermutation = (string) => {
  let charMap = {};
  const normStr = string.toLowerCase();

  for (let i = 0; i < normStr.length; i++) {
    const char = normStr[i];
    if (char !== ' ') {
      !charMap[char] ? charMap[char] = 1 : charMap[char]++
    }
  }

  let isOdd = false;
  for (let char in charMap) {
    const checkFreq = charMap[char]

    if (checkFreq % 2 !== 0) {
      if (isOdd) {
        return false
      } else {
        isOdd = true;
      }
    }
  }
  return true;
}

module.exports = {
  isUnique,
  isPermutation,
  urlify,
  palindromePermutation
}