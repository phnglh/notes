/**
 * @param {number[][]} points
 * @return {number}
 */
const numberOfPairs = function(points) {
  points.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);

  let ans = 0;
  const n = points.length;

  for (let i = 0; i < n; i++) {
    let maxY = -Infinity;
    const y1 = points[i][1];

    for (let j = i + 1; j < n; j++) {
      const y2 = points[j][1];
      if (maxY < y2 && y2 <= y1) {
        ans++;
        maxY = y2; 
      }
    }
  }

  return ans;
};
