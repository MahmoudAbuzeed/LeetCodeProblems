/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
//   if (s.length !== t.length) return false;
//   const map = {};
//   for (let i = 0; i < s.length; i++) {
    // for (let j = i; j < t.length; j++) {
    //   map[s[i]] = t[j];
    //   break;
    // }
//   }
//   for (let i = 0; i < s.length; i++) {
    // for (let j = i; j < t.length; j++) {
    //   if (t[j] !== map[s[i]]) return false;
    //   break;
    // }
//   }
//   return true;

var map = {};
var map2 = {};
for(var i = 0; i < s.length; i++){
    if(map[s[i]] === undefined){
        if(map2[t[i]] !== undefined) return false;
        map[s[i]] = t[i];
        map2[t[i]] = s[i];
    }
    else if(map[s[i]] === t[i]) continue;
    else return false
}
return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("paper", "title"))
