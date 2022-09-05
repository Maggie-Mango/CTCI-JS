var wordBreak = function(s, wordDict) {
  let table = []

  for (let i = 0; i < s.length; i++) {
      //console.log(table)
      if (table[i] === true) {
          for (let word of wordDict) {
              if (s.slice(i, i + word.length) === word) {
                  table[i + word.length] = true;
              }
          }
      }
  }

  return table[s.length] ? table[s.length] : false
};