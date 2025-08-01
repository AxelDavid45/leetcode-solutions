/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxNums = 0;
  let currentCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount += 1;
    } else {
      currentCount = 0;
    }

    if (maxNums < currentCount) {
      maxNums = currentCount;
    }
  }

  return maxNums;
};
