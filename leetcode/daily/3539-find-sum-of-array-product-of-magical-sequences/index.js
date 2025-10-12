/**
 * @param {number} m
 * @param {number} k
 * @param {number[]} nums
 * @return {number}
 */
var magicalSum = function(m, k, nums) {
    const MOD = 1000000007;
    
    const getComb = (n, k) => {
        const comb = Array(n + 1).fill(0).map(() => Array(k + 1).fill(0));
        
        for (let i = 0; i <= n; i++) {
            comb[i][0] = 1;
        }
        
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= k; j++) {
                comb[i][j] = comb[i - 1][j] + comb[i - 1][j - 1];
            }
        }
        
        return comb;
    };
    
    const modPow = (x, n) => {
        if (n === 0) return 1;
        if (n % 2 === 1) {
            return (x * modPow(x % MOD, n - 1)) % MOD;
        }
        return modPow((x * x) % MOD, Math.floor(n / 2)) % MOD;
    };
    
    const popcount = (n) => {
        let count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    };
    
    const comb = getComb(m, m);
    
    const mem = Array(m + 1).fill(null).map(() =>
        Array(k + 1).fill(null).map(() =>
            Array(nums.length + 1).fill(null).map(() =>
                Array(m + 1).fill(-1)
            )
        )
    );
    
    const dp = (remainingM, remainingK, i, carry) => {
        if (remainingM < 0 || remainingK < 0 || 
            (remainingM + popcount(carry) < remainingK)) {
            return 0;
        }
        
        if (remainingM === 0) {
            return popcount(carry) === remainingK ? 1 : 0;
        }
        
        if (i === nums.length) {
            return 0;
        }
        
        if (mem[remainingM][remainingK][i][carry] !== -1) {
            return mem[remainingM][remainingK][i][carry];
        }
        
        let res = 0;
        
        for (let count = 0; count <= remainingM; count++) {
            const contribution = (comb[remainingM][count] * modPow(nums[i], count)) % MOD;
            const newCarry = carry + count;
            
            const subResult = dp(
                remainingM - count,
                remainingK - (newCarry % 2),
                i + 1,
                Math.floor(newCarry / 2)
            );
            
            res = (res + (subResult * contribution) % MOD) % MOD;
        }
        
        mem[remainingM][remainingK][i][carry] = res;
        return res;
    };
    
    return dp(m, k, 0, 0);
};
