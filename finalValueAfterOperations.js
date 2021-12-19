/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let hashmap = {
    "--X": -1,
    "X--": -1,
    "++X": +1,
    "X++": +1,
  };
  const result = [];
  for (let i = 0; i < operations.length; i++)
    result.push(hashmap[operations[i]]);

  return result.reduce((a, b) => a + b, 0);
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
