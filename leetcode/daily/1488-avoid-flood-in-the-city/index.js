/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
  const n = rains.length;
  const res = new Array(n).fill(1);
  const full = new Map();
  const dryDays = [];

  for (let i = 0; i < n; i++) {
    const lake = rains[i];
    if (lake === 0) {
      dryDays.push(i);
      res[i] = 1;
    } else {
      res[i] = -1;
      if (full.has(lake)) {
        const last = full.get(lake);
        const j = findDryDay(dryDays, last);
        if (j === -1) return [];

        const dryIndex = dryDays[j];
        res[dryIndex] = lake;
        dryDays.splice(j, 1); // remove used day
      }
      full.set(lake, i);
    }
  }
  return res;
};

function findDryDay(dryDays, lastRain) {
  let left = 0,
    right = dryDays.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (dryDays[mid] > lastRain) right = mid - 1;
    else left = mid + 1;
  }
  return left < dryDays.length ? left : -1;
}
