/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = [];
  for (let i = 0; i < n +1; i++) {
    const temp = i.toString(2).split("");
    let tempCount = 0;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] == 1) tempCount += 1;
    }
    result.push(tempCount);
  }
  return result;
};

console.log(countBits(2));
console.log(countBits(5));
