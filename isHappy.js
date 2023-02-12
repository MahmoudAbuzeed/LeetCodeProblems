/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
//   if (n === 1 ) return true;
//   if (n % 2 === 0 ) return false;
//   const numberString = n.toString();
//   const arrSquare = [];
//   for (const element of numberString) arrSquare.push(+element * +element);
//   const initialValue = 0;
//   const arrSum = arrSquare.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
//   if (arrSum !== 1) isHappy(arrSum);
//   return true;
while (n > 6) {
    let next = 0;
    while (n) {
        next += (n % 10) * (n % 10);
        n = Math.trunc(n / 10);
    }
    n = next;
}
return n === 1;
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(3));
console.log(isHappy(1));
console.log(isHappy(7));
