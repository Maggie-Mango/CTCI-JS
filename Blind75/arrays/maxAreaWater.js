var maxArea = function(height) {
  let minHeight = height[0];
  let maxArea = 0;
  let leftPtr = 0;
  let rightPtr = height.length - 1;
  while (leftPtr < rightPtr) {
      let distance = rightPtr - leftPtr;
      minHeight = Math.min(height[leftPtr], height[rightPtr])
      maxArea = Math.max(maxArea, minHeight * distance);
      if (height[rightPtr] > height[leftPtr]) {
          leftPtr++;
      } else {
          rightPtr--;
      }

  }
  return maxArea;
};