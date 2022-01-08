/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mixedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  if (mixedArr.length % 2 == 0) {
    return (
      (mixedArr[mixedArr.length / 2 - 1] + mixedArr[mixedArr.length / 2]) / 2
    );
  } else {
    return mixedArr[Math.floor(mixedArr.length / 2)];
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([3], [-2, -1]));
