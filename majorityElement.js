/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const numberMap = {};
  const condition = Math.round(nums.length / 2);
  for (let i = 0; i < nums.length; i++) nums[i] in numberMap ? (numberMap[nums[i]] += 1) : (numberMap[nums[i]] = 1);
  for (const key in numberMap) if (numberMap[key] >= condition) return key;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
