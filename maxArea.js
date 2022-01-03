/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maximumArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let shorterLine = Math.min(height[left], height[right]);
    maximumArea = Math.max(maximumArea, shorterLine * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maximumArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
