/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let n = seats.length;
  let prev = -1;
  let ans = 0;
  for (let i = 0; i <= n; ++i) {
    if (i == n) ans = Math.max(ans, n - prev - 1);
    else if (seats[i]) {
      if (prev == -1) ans = i;
      else ans = Math.max(ans, Math.floor((i - prev) / 2));
      prev = i;
    }
  }
  return ans;
};

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0]));
console.log(maxDistToClosest([0, 1]));
console.log(maxDistToClosest([1, 0, 0, 1]));
