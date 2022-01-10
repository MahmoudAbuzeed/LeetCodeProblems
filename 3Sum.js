/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // Time Limit Exceeded solution
  //   const threeSumArray = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       for (let k = j + 1; k < nums.length; k++) {
  //         if (nums[i] + nums[j] + nums[k] == 0) {
  //           const sortedArray = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
  //           threeSumArray.push(sortedArray);
  //         }
  //       }
  //     }
  //   }
  //   let stringArray = threeSumArray.map(JSON.stringify);
  //   let uniqueStringArray = new Set(stringArray);
  //   let uniqueArray = Array.from(uniqueStringArray, JSON.parse);
  //   return uniqueArray;

  var len = nums.length;
  var res = [];
  var l = 0;
  var r = 0;
  nums.sort((a, b) => a - b);
  for (var i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    l = i + 1;
    r = len - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] < 0) {
        l++;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));
