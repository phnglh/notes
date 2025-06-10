/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let count = new Array(26).fill(0);
    for (let char of s) {
        count[char.charCodeAt(0) - 97]++;
    }
    let maxOdd = 0;
    let minEven = s.length;
    for (let freq of count) {
        if (freq === 0) continue;
        if (freq % 2 === 0) {
            minEven = Math.min(minEven, freq);
        } else {
            maxOdd = Math.max(maxOdd, freq);
        }
    }
    return maxOdd - minEven;
};
