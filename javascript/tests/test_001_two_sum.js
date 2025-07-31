// const twoSum = require('../001-two-sum'); // Uncomment and adjust import as needed

function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
}

test('example', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
});
