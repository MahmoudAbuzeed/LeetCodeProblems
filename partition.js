/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let dp = getDp(s);
  let res = [];
  let now = [];
  dfs(dp, res, now, s, 0);
  return res;
};

const dfs = function (dp, res, now, s, index) {
  if (index === s.length) {
    res.push(Array.from(now));
    return;
  }
  for (let i = index; i < s.length; i++) {
    if (dp[index][i]) {
      now.push(s.substring(index, i + 1));
      dfs(dp, res, now, s, i + 1);
      now.pop();
    }
  }
};

const getDp = function (s) {
  let dp = Array(s.length); // create multidimensional array
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (!dp[j]) dp[j] = Array(s.length);
      dp[j][i] = s[i] === s[j] && (i - j <= 2 || dp[j + 1][i - 1]);
    }
  }
  return dp;
};

console.log(partition("aab"));
console.log(partition("a"));
