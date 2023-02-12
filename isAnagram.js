/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    //   const firstArr = s.split("");
    //   for (const iterator of t) if (!firstArr.includes(iterator)) return false;
    //   return true;
    
  if(t.length !== s.length) return false
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < s.length; i++) {
    map1[s[i]] ? (map1[s[i]] += 1) : (map1[s[i]] = 1);    
    map2[t[i]] ? (map2[t[i]] += 1) : (map2[t[i]] = 1);    
  }

  const orderedMap1 = Object.keys(map1).sort().reduce(
    (obj, key) => { 
      obj[key] = map1[key]; 
      return obj;
    }, 
    {}
  );
  const orderedMap2 = Object.keys(map2).sort().reduce(
    (obj, key) => { 
      obj[key] = map2[key]; 
      return obj;
    }, 
    {}
  );
  return JSON.stringify(orderedMap1) === JSON.stringify(orderedMap2)
 
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("ab", "ba"));
