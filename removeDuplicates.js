/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let newArr = [];
  let current;
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== current) {
      newArr.push(nums[i]);
      current = nums[i];
    }
  }

  return newArr;
};

// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates([1, 1, 2]));

console.log(removeDuplicates([7, 3, 2, 6, 3, 9, 2, 5, 7, 11, 25, 9]));
