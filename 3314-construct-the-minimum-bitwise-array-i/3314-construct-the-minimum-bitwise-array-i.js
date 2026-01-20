/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var foundX = function(x){
    let min = Infinity
    for(let j = 0; j < x; j++){
        if((j | (j+1)) === x){
            min = Math.min(min,j)
        }
    }
    return min
 }


 var minBitwiseArray = function(nums) {
    let ans = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 2){
            ans.push(-1)
            continue;
        }
        const X = foundX(nums[i])
        ans.push(X)

    }

    // ans.push(9 | 10)
    return ans;
};