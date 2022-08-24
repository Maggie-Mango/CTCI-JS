function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);
  if (fastest) reverse(redShirtSpeeds);

  let speed = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    const rider1 = redShirtSpeeds[i];
    const rider2 = blueShirtSpeeds[i];
    speed += Math.max(rider1, rider2);
  }
  return speed;
}


function reverse(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}