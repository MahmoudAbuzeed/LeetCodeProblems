/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let arrayOfSums = [];
  for (let i = 0; i < accounts.length; i++) {
    arrayOfSums.push(accounts[i].reduce((a, b) => a + b, 0));
  }

  return Math.max(...arrayOfSums);
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
