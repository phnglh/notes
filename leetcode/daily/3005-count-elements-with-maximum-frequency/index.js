/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = new Map();

  for (const x of nums) {
    freq.set(x, (freq.get(x) || 0) + 1);
  }

  let maxFreq = 0;
  for (const v of freq.values()) {
    if (v > maxFreq) maxFreq = v;
  }

  let result = 0;
  for (const v of freq.values()) {
    if (v === maxFreq) result += v;
  }

  return result;
};
