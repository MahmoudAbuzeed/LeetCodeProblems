/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let counts = new Array(n + 1).fill(0);
  for (let [i, j] of trust) {
    counts[i]--;
    counts[j]++;
  }
  for (let i = 1; i < counts.length; i++) {
    if (counts[i] == n - 1) {
      return i;
    }
  }
  return -1;
};

console.log(findJudge(2, [[1, 2]]));
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
