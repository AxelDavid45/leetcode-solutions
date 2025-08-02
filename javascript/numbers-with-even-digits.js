/**
 * @link https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/
 * @param {number[]} nums
 * @return {number}
 */
// N = nums.length
// M = nums[i] (number digits)

// Complexity O(N*log(M))
var findNumbers = function (nums) {
  let countNumbers = 0;

  for (let i = 0; i < nums.length; i++) {
    const charLength = String(nums[i]).length; // O log m

    if (charLength % 2 === 0) {
      countNumbers += 1;
    }
  }

  return countNumbers;
};
