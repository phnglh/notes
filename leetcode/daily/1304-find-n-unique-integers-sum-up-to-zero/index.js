/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const res = [];
    for (let i = 1; i <= Math.floor(n/2);i++){
    res.push(-i,i)
  }
   if (n % 2 === 1) res.push(0);
  return res;
};
const testCases = [1, 2, 3, 4, 5, 7, 10];
for (const n of testCases) {
  const arr = sumZero(n);
  const sum = arr.reduce((a, b) => a + b, 0);
  console.log(`n = ${n}`, arr, "→ sum =", sum);
}
