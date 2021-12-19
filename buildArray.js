/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const newArray = [];
  for (let i = 0; i < nums.length; i++) newArray.push(nums[nums[i]]);
  return newArray;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
console.log(buildArray([5, 0, 1, 2, 3, 4]));
