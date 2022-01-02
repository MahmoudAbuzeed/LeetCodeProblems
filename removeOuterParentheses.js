/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stack = [];
  let res = "";
  let pos = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? stack.push(s[i]) : stack.pop();

    if (stack.length === 0) {
      res += s.slice(pos + 1, i);
      pos = i + 1;
    }
  }
  return res;
};

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));
