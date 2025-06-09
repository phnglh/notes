# Add Binary

<https://leetcode.com/problems/add-binary/>

## Summary

Adding binary units from right to left, sequencely

- 0 + 0 = 0
- 0  + 1 = 1 + 0 = 1
- 1 + 1 = 10, update 0 as unit result and carried 1 to next unit
Continue until end of strings

## Code

```python
 class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        a, b = a[::-1], b[::-1]
        
        carry = 0
        result = []
        
        max_len = max(len(a), len(b))
        
        for i in range(max_len):
            bit_a = int(a[i]) if i < len(a) else 0
            bit_b = int(b[i]) if i < len(b) else 0
            
            total = bit_a + bit_b + carry
            
            carry = total // 2
            result.append(str(total % 2))  

        if carry:
            result.append('1')

        return ''.join(result[::-1])
