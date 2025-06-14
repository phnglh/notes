/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var findKthNumber = function (n, k) {
  let curr = 1;
  k--; 

  while (k > 0) {
    const steps = calcSteps(n, curr, curr + 1);
    if (steps <= k) {
      curr++;
      k -= steps;
    } else {
      curr *= 10;
      k--;
    }
  }

  return curr;

  function calcSteps(n, curr, next) {
    let steps = 0;
    while (curr <= n) {
      steps += Math.min(n + 1, next) - curr;
      curr *= 10;
      next *= 10;
    }
    return steps;
  }
};

function test() {
  console.log("Test n=13, k=2:", findKthNumber(13, 2)); 
  console.log("Test n=1, k=1:", findKthNumber(1, 1));   
  console.log("Test n=1000000000, k=100000000", findKthNumber(1000000000,100000000)); 
}

test();
