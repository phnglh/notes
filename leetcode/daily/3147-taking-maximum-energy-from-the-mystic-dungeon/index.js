/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
  const n = energy.length;
  let ans = -Infinity;

  for (let r = 0; r < k; r++) {
    let sum = 0;
    for (let j = n - 1 - r; j >= 0; j -= k) {
      sum += energy[j];
      ans = Math.max(ans, sum);
    }
  }

  return ans;
};
