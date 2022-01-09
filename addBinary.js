/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  //   const convertBase = (number, fromBase, toBase) => {
  //     return parseInt(number, fromBase).toString(toBase);
  //   };

  //   const dec2bin = (number) => {
  //     return convertBase(number, 10, 2);
  //   };

  //   const bin2dec = (number) => {
  //     return convertBase(number, 2, 10);
  //   };

  //   const sum = +bin2dec(a) + +bin2dec(b);
  //   return dec2bin(sum);

  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += a[i--] - "0";
    }
    if (j >= 0) {
      sum += b[j--] - "0";
    }
    result = (sum % 2) + result;
    carry = parseInt(sum / 2);
  }
  if (carry > 0) {
    result = 1 + result;
  }
  return result;
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
