/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";
  if (s.length == 1) return s;

  let centeredPalindrome = function (left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };

  for (let i = 0; i < s.length - 1; i++) {
    let oddPal = centeredPalindrome(i, i + 1);
    let evenPal = centeredPalindrome(i, i);

    if (oddPal.length > result.length) result = oddPal;
    if (evenPal.length > result.length) result = evenPal;
  }
  return result;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
