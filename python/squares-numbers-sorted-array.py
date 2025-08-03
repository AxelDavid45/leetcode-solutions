from typing import List


def sortedSquares(nums: List[int]) -> List[int]:
  result = [None] * len(nums)
  left = 0
  right = len(nums) - 1
  
  # i >= 0
  for i in range(len(nums) - 1, -1, -1):
    print(i, nums[right], nums[left])

    if abs(nums[left]) >= abs(nums[right]):
      result[i] = nums[left] ** 2
      left += 1
    else:
      result[i] = nums[right] ** 2
      right -= 1

  return result

print(sortedSquares([-4,-1,0,3,10]))
        