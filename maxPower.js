/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let power = 1,
    tempArr = [];
  for (i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i + 1)) {
      power++;
    } else {
      tempArr.push(power);
      power = 1;
    }
  }
  return Math.max(...tempArr);
};

console.log(maxPower("leetcode"));
console.log(maxPower("abbcccddddeeeeedcba"));
console.log(maxPower("triplepillooooow"));
console.log(maxPower("hooraaaaaaaaaaay"));
console.log(maxPower("tourist"));
