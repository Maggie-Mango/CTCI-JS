function arrayMinJumps(arr) {
  let farthest = 0;
  let currJump = 0;
  let jumpsRequired = 0;

  //loop through the nums
  for (let i = 0; i < arr.length; i++) {
    farthest = Math.max(farthest, i + arr[i])
    if (i === currJump) {
      jumpsRequired++
      currJump = farthest
    }
  }
    return jumpsRequired

}


var spiralTraversal = function(matrix) {

  // TODO: Implement me!
  var results = [];
  var startRowIndex = 0;
  var endRowIndex = matrix.length - 1;
  var startColIndex = 0;
  var endColIndex = matrix[0].length - 1;
  //while start row index is less than or equal to end row index
  //AND
  //start column index is less than or equal to end column index
  while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {
   //right
    for (var i = startColIndex; i <= endColIndex; i++) {
      console.log(matrix[0])
      results.push(matrix[startRowIndex][i]);
    }
    startRowIndex++;
    console.log('result ', results)


    console.log('start ', startRowIndex)
    console.log('end ', endRowIndex)
    for (var j = startRowIndex; j <= endRowIndex; j++) {

      results.push(matrix[j][endColIndex]);
    }
    endColIndex--;

    if (startRowIndex <= endRowIndex) {
      for (var k = endColIndex; k >= startColIndex; k--) {
        results.push(matrix[endRowIndex][k]);
      }
      endRowIndex--;
    }

    if (startColIndex <= endColIndex) {
      for (var m = endRowIndex; m >= startRowIndex; m--) {
        results.push(matrix[m][startColIndex]);
      }
      startColIndex++;
    }

  }

  return results;

};