/**
 * @param {number} num
 * @return {number}
 */
const minMaxDifference = function(num) {
    const string = num.toString();
    let maxValue = Number.MIN_SAFE_INTEGER;
    let minValue = Number.MAX_SAFE_INTEGER;

for (let d1 = 0; d1 <= 9; d1++) {
        for (let d2 = 0; d2 <= 9; d2++) {
            const from = d1.toString();
            const to = d2.toString();
            if (from === to) continue; 

            const replaced = string.split('').map(ch => ch === from ? to : ch).join('');
            const newVal = parseInt(replaced, 10);
            maxValue = Math.max(maxValue, newVal);
            minValue = Math.min(minValue, newVal);
        }
    }

    return maxValue - minValue;

};

console.log(minMaxDifference(123456)); 
console.log(minMaxDifference(1001)); 
console.log(minMaxDifference(9876543210)); 
