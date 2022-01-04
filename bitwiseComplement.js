/**
 * @param {number} n
 * @return {number}
 */

const convertBase = (number, fromBase, toBase) => {
  return parseInt(number, fromBase).toString(toBase);
};

const dec2bin = (number) => {
  return convertBase(number, 10, 2);
};

const bin2dec = (number) => {
  return convertBase(number, 2, 10);
};

var bitwiseComplement = function (n) {
  const map = {
    0: 1,
    1: 0,
  };
  let result = "";

  const binaryNum = dec2bin(n);
  for (let i = 0; i < binaryNum.length; i++) result += map[binaryNum[i]];
  const DecimalNum = bin2dec(result);

  return +DecimalNum;
};

console.log(bitwiseComplement(5));
console.log(bitwiseComplement(7));
console.log(bitwiseComplement(10));
