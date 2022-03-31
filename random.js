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

