# 3Sum

https://leetcode.com/problems/3sum/

## Summary

- Break the big problem to smaller problems
- Big problem: find `i, j, k` with `i + j + k = 0`
- With each `i` as item in the array, find `j, k` with `j + k = -i`
- With each `i, k` as 2 items in the array, find `k` with `k = -i - j`

## Code
