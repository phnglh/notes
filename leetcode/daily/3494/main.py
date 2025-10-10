class Solution:
    def minimumTime(skill: List[int], mana: List[int]) -> int:
        n, m = len(skill), len(mana)
        # Precompute prefix sums of skill (for convenience)
        pref = [0] * (n + 1)
        for i in range(n):
            pref[i + 1] = pref[i] + skill[i]
    
        # Check if finishing in time T is possible
        def can_finish(T: int) -> bool:
            order = sorted(range(m), key=lambda j: mana[j])
            prev_start = float('-inf')

            for j in order:
                # Placeholder: spacing logic
                needed_start = prev_start + 1  # tránh lỗi, giả định spacing 1
                total_for_j = mana[j] * pref[n]
                if needed_start + total_for_j > T:
                    return False
                prev_start = needed_start
            return True
    
    # Binary search over T
    lo = 0
    hi = max(skill) * max(mana) * m * n
    ans = hi
    while lo <= hi:
        mid = (lo + hi) // 2
        if can_finish(mid):
            ans = mid
            hi = mid - 1
        else:
            lo = mid + 1
    return ans

