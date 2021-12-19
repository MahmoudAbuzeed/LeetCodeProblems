/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const indicesArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] == target) indicesArr.push(i, j);
    }
  }

  return indicesArr;
  //   const indicesArr = [];

  //   const clonedNums = [...nums];

  //   for (let i = 0; i < clonedNums.length; i++) {
  //     if (nums[i] + clonedNums[i + 1] == target) indicesArr.push(i, i + 1);
  //   }

  //   return indicesArr;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
