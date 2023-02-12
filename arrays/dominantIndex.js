/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const largest = Math.max(...nums);
  for (let index = 0; index < nums.length; index++) {
    if (largest < nums[index] + nums[index] && nums[index] != largest ) return -1;
  }
  return 1;
};

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
