/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n = triangle.length;
  console.log(n)
  const dp = [...triangle[n-1]]; 
  console.log(dp)
  
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j+1]);
      console.log(dp[j])
    }
  }
  
  return dp[0];
};


const triangle = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
];

console.log(minimumTotal(triangle));
