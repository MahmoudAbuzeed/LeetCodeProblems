/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {

     return n.toString(2).split("0").join("").length;

//   const stringArr = n.toString(2).split("");
//   let maxCount = 0;
//   for (const iterator of stringArr) if (iterator !== "0") maxCount += 1;
//   return maxCount;
};

console.log(hammingWeight(00000000000000000000000000001011));
console.log(hammingWeight(00000000000000000000000010000000));
console.log(hammingWeight(11111111111111111111111111111101));
