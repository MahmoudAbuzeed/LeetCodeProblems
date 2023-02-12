/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((acc, num) => acc + num, 0);
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i - 1] || 0;
    sum -= nums[i];
    if (currentSum === sum) return i;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 2, 3]));
// console.log(pivotIndex([2, 1, -1]));
