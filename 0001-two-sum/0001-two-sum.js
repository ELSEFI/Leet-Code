/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ans = []
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(target - nums[i] === nums[j]){
                ans.push(i);
                ans.push(j);
            }
        }
    }
    return ans;
};