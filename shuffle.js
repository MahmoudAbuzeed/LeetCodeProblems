/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let mixedArr = [];
  for (let i = 0; i < n; i++) mixedArr.push(nums[i], nums[n + i]);

  return mixedArr;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(shuffle([1, 1, 2, 2], 2));

// Another Solution

// var shuffle = function(nums, n) {
//     let firstArr = [],
//   lastArr = [],
//   mixedArray = [];
// for (let i = 0; i < nums.length; i++) {
//   if (i + 1 <= n) {
//     firstArr.push(nums[i]);
//   } else {
//     lastArr.push(nums[i]);
//   }
// }

// for (let i = 0; i < firstArr.length; i++) {
//   mixedArray.push(firstArr[i], lastArr[i]);
// }
// return mixedArray;

// };
