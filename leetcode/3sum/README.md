# 3Sum

https://leetcode.com/problems/3sum/

## Summary

- Break the big problem to smaller problems
- Big problem: find `i, j, k` with `i + j + k = 0`
- With each `i` as item in the array, find `j, k` with `j + k = -i`
- With each `i, k` as 2 items in the array, find `k` with `k = -i - j`

## Code

```python
  class Solution:
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()
        res = []
        n = len(nums)

        for i in range(n):
            if i > 0 and nums[i] == nums[i - 1]:
                continue  

            left, right = i + 1, n - 1

            while left < right:
                total = nums[i] + nums[left] + nums[right]

                if total == 0:
                    res.append([nums[i], nums[left], nums[right]])
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1

                    left += 1
                    right -= 1

                elif total < 0:
                    left += 1
                else:
                    right -= 1

        return res
