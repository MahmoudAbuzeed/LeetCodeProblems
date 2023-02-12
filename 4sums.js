/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// var fourSum = function (nums, target) {
//   const allPairs = {};
//   const quadruplets = [];
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       const currentSum = nums[i] + nums[j];
//       const difference = target - currentSum;
//       if (difference in allPairs) {
//         for (const pair of allPairs[difference]) {
//           quadruplets.push(pair.concat([nums[i], nums[j]]));
//         }
//       }
//     }
//     for (let k = 0; k < nums.length; k++) {
//       const currentSum = nums[i] + nums[k];
//       if (!(currentSum in allPairs)) {
//         allPairs[currentSum] = [[nums[k], nums[i]]];
//       } else {
//         allPairs[currentSum].push([nums[k], nums[i]]);
//       }
//     }
//   }
//   return  quadruplets.filter(( t={}, a=> !(t[a]=a in t) ));
// };

// var fourSum = function(nums, target) {
//   let quadrs = new Map();
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++){
//       for (let j = 0; j < nums.length; j++){
//           for (let k = 0; k < nums.length; k++){
//               let forthNum = target - nums[i] - nums[j] - nums[k];

//               if (map.has(forthNum) && map.get(forthNum) !== k
//                  && map.get(forthNum) !== j &&
//                   map.get(forthNum) !== i &&
//                   i !== j && i !== k && j !== k){

//                   let quadruplet = [nums[i], nums[j], nums[k], forthNum];
//                   let key = quadruplet.sort((a, b) => a - b).join("");
//                   quadrs.set(key, quadruplet);
//               } else {
//                   map.set(nums[k], k);
//               }
//           }
//       }
//   }

//   return Array.from(quadrs.values());
// }

var fourSum = function (nums, target) {
  let solutionArrays = [];
  sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 3; i++) {
    if (i > 0 && sortedNums[i] == sortedNums[i - 1]) continue;

    for (let j = i + 1; j < sortedNums.length - 2; j++) {
      if (j > i + 1 && sortedNums[j] == sortedNums[j - 1]) continue;

      let left = j + 1;
      let right = sortedNums.length - 1;

      while (left < right) {
        const total = sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right];

        if (total == target) {
          solutionArrays.push([sortedNums[i], sortedNums[j], sortedNums[left], sortedNums[right]]);

          do {
            left++;
          } while (sortedNums[left] == sortedNums[left - 1]);

          do {
            right--;
          } while (sortedNums[right] == sortedNums[right + 1]);
        } else if (total < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return solutionArrays;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
