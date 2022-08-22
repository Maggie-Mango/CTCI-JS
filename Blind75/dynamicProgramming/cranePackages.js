const movePackage = (A, P, B, E) => {
  //get ranges
  let rangeAandP = new Array();
  for (let i = 0; i < A.length; i++) {
    rangeAandP.push([P[i] - A[i], P[i] + A[i]])
  }
  //merge them
  let merged = sortAndMerge(rangeAandP);

  //iterate through merged to see if B & E fit conditions
  //there should be an upper and lower bound
  for (let i = 0; i < merged.length; i++) {
    let last = merged[i].length - 1;
    //If B > E
    if (merged[i][0] >= B && merged[i][last] <= E) return true
    //If E > B
    if (merged[i][0] <= B && merged[i][last] >= E) return true
  }
  return false;
};


const sortAndMerge = (intervals) => {
  //sort them
  intervals = intervals.sort((a, b) => a[0] - b[0])
  //merge any overlap
  let output = [intervals[0]];
  let current = output[0];

  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];
    if (current[1] >= next[0]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      current = next;
      output.push(current);
    }
  }

  return output;
}


console.log(movePackage([1, 4, 2], [10, 4, 7], 11, 1)) // returns true
console.log(movePackage([2, 1], [5, 1], 2, 6)) //returns false
console.log(movePackage([1, 4, 2], [10, 4, 7], 11, 1)) //returns true