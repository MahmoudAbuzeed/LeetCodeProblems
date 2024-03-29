/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = {};
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] !== undefined){
            if(i - map[nums[i]] <= k){
                return true;
            }
            else map[nums[i]] = i;
        }
        else  map[nums[i]] = i;
    }
    return false;
};


console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))