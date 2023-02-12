/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    const stringNumber = n.toString(2).split("");
    while(stringNumber.length < 32) stringNumber.unshift("0");
    return parseInt(stringNumber.reverse().join(""), 2);    
};

console.log(reverseBits(00000010100101000001111010011100));
console.log(reverseBits(11111111111111111111111111111101));
