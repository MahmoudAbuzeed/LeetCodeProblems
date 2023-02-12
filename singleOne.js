/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const numberMap = {};
  for (let i = 0; i < nums.length; i++) nums[i] in numberMap ? (numberMap[nums[i]] += 1) : (numberMap[nums[i]] = 1);
  let smallest = target = Infinity;
  for (const key in numberMap) {
    if (numberMap[key] < smallest) {
      smallest = numberMap[key];
      target = key;
    }
  }

  return  parseInt(target) 
  
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]))
