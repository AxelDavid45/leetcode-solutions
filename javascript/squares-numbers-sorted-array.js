/**
 * Solution works with O(N) two pointers
 * @url https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let size = nums.length - 1;

  for (let i = size; i >= 0; i--) {
    if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
      result[i] = nums[left] ** 2;
      left++;
    } else {
      result[i] = nums[right] ** 2;
      right--;
    }
  }

  return result;
};
