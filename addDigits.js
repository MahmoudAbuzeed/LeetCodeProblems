/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if(num ==0) return 0;
   const sum = num%9;
   if(sum == 0) return 9;
   return sum;
};

console.log(addDigits(38));
// console.log(addDigits(0));
