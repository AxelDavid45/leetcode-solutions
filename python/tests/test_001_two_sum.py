import unittest
# from ..001_two_sum import two_sum  # Uncomment and adjust import as needed

def two_sum(nums, target):
    # Example implementation for testing
    lookup = {}
    for i, num in enumerate(nums):
        if target - num in lookup:
            return [lookup[target - num], i]
        lookup[num] = i

class TestTwoSum(unittest.TestCase):
    def test_example(self):
        self.assertEqual(two_sum([2,7,11,15], 9), [0,1])

if __name__ == '__main__':
    unittest.main()
