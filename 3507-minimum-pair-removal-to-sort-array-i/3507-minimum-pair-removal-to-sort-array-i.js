/**
 * @param {number[]} nums
 * @return {number}
 */

var isNonDecreasing = function(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
        }
        return true;
 }
var minimumPairRemoval = function (nums) {
  let operations = 0;

  while (!isNonDecreasing(nums)) {
    let minSum = Infinity;
    let index = 0;

    for (let i = 0; i < nums.length - 1; i++) {
      const sum = nums[i] + nums[i + 1];
      if (sum < minSum) {
        minSum = sum;
        index = i;
      }
    }

    nums.splice(index, 2, minSum);
    operations++;
  }

  return operations;
};
