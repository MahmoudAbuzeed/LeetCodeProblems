/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //   const sortedArr = nums.sort((a, b) => a - b);
  //   for (let i = 0; i < sortedArr.length; i++) {
  //     if (sortedArr[i] === sortedArr[i + 1]) return true;
  //   }
  //   return false;

  const hashMap = {};
  for (const element of nums) {
    if (element in hashMap) {
      return true;
    } else hashMap[element] = element;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
