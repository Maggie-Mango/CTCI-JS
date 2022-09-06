var wordBreak = function(s, wordDict) {
  let table = []
  table[0] = true;

  for (let i = 0; i < s.length; i++) {
      //console.log(table)
      if (table[i] === true) {
          for (let word of wordDict) {
              console.log('i ', i)
              console.log(s.slice(i, i + word.length))
              if (s.slice(i, i + word.length) === word) {
                  table[i + word.length] = true;//this assigns true to the exact word length needed then moves onto the next
              }
          }
      }
  }

  return table[s.length] ? table[s.length] : false
};