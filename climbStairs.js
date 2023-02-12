 /**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let array = [0, 1, 2];
    for(let i = 3; i <= n; i++){
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[n];
};

console.log(climbStairs(2))
console.log(climbStairs(3))