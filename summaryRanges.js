/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];

  let cur = nums[0];
  let res = [[cur]];

  for (let i = 1; i < nums.length; i++) {
    if (cur + 1 === nums[i]) {
      res[res.length - 1][1] = cur + 1;
    } else {
      res.push([nums[i]]);
    }

    cur = nums[i];
  }
  return mapResult(res);
};

const mapResult = (res) => {
  return res.map((element) => {
    if (element.length === 1) return String(element[0]);
    else {
      return element.join("->");
    }
  });
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// console.log(summaryRanges([0,2,3,4,6,8,9]))
