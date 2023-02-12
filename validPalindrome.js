/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

  const pureString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().replace(/\s/g,'')
  if (pureString.length === 0 || pureString.length === 1) return true;
  const reversedString = pureString.split("").reverse().join("");
  for (let i = 0; i < reversedString.length; i++) {
    if(pureString[i]!== reversedString[i]) return false
  }
  return true

};

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "))
console.log(isPalindrome("a."))
console.log(isPalindrome("ab"))
console.log(isPalindrome("ab@a"))
console.log(isPalindrome("0P"))

