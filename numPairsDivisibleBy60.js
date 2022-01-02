/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  // Bad solution consume time
  //   let total = 0;
  //   for (let i = 0; i < time.length; i++) {
  //     for (let j = i + 1; j < time.length; j++) {
  //       if ((time[i] + time[j]) % 60 == 0) total += 1;
  //     }
  //   }

  //   return total;

  // Good solution

  const map = {};
  let count = 0;
  for (let t of time) {
    let remainder = t % 60;
    count += map[(60 - remainder) % 60] || 0;
    map[remainder] = (map[remainder] || 0) + 1;
  }

  return count;
};

console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]));
console.log(numPairsDivisibleBy60([60, 60, 60]));
