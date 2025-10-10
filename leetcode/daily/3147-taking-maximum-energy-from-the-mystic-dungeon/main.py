class Solution:
    def maximumEnergy(self, energy: List[int], k: int) -> int:
        n = len(energy)
        ans = float("-inf")
        # với mỗi modulo r trong [0, k)
        for r in range(k):
            s = 0
            # đi từ cuối nhóm r trở về đầu nhóm theo bước k
            # chỉ xét các j = r, r+k, r+2k, … nhưng thuận tiện đi ngược
            for j in range(n - 1 - r, -1, -k):
                s += energy[j]
                ans = max(ans, s)
        return ans
