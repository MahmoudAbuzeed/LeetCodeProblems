/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    if(nums.length === 1 && nums[0] !== 0 ) return nums[0] -1
    if(nums.length === 1 && nums[0] === 0  ) return  1
    const sortedNumber = nums.sort((a, b) => a - b);
    if( nums[0] !== 0  ) return  0
  for (let i = sortedNumber[0]; i < sortedNumber[sortedNumber.length - 1] + 1; i++) {
    if (i === sortedNumber[i]) {
      continue;
    } else if (i !== sortedNumber[i]) {
      return i;
    }
  }
  return sortedNumber[sortedNumber.length - 1] + 1;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([1]));
console.log(missingNumber([0]));
console.log(missingNumber([1, 2]));



