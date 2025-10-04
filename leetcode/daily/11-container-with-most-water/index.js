/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const width = right - left;
    const area = h * width;
    if (area > max) max = area;

    // move the pointer at the smaller height
    if (height[left] < height[right]) {
      left++;
    } else if (height[left] > height[right]) {
      right--;
    } else {
      // equal heights: can move either; move both is also possible but moving one is fine
      // moving both might skip potential intermediate solution, so move one (here left++)
      left++;
    }
  }

  return max;
}
