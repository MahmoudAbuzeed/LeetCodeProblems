/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n == 1) return true;
  const arr = [];
  for (let i = 2; i <= n; i = i * 2) arr.push(i);
  if (arr.includes(n)) return true;
  return false;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(64));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(6));
