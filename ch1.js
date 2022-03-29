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



module.exports = {
  isUnique
}