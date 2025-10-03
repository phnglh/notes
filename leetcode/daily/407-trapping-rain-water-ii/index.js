var trapRainWater = function(heightMap) {
  class MinHeap {
    constructor() { this.data = []; }
    push(val) {
      this.data.push(val);
      this._bubbleUp(this.data.length - 1);
    }
    pop() {
      if (this.data.length === 0) return null;
      const top = this.data[0];
      const end = this.data.pop();
      if (this.data.length > 0) {
        this.data[0] = end;
        this._sinkDown(0);
      }
      return top;
    }
    _bubbleUp(idx) {
      let element = this.data[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.data[parentIdx];
        if (element[0] >= parent[0]) break;
        this.data[parentIdx] = element;
        this.data[idx] = parent;
        idx = parentIdx;
      }
    }
    _sinkDown(idx) {
      let length = this.data.length;
      let element = this.data[idx];
      while (true) {
        let leftIdx = 2 * idx + 1;
        let rightIdx = 2 * idx + 2;
        let swap = null;
        if (leftIdx < length) {
          if (this.data[leftIdx][0] < element[0]) swap = leftIdx;
        }
        if (rightIdx < length) {
          if (
            (swap === null && this.data[rightIdx][0] < element[0]) ||
            (swap !== null && this.data[rightIdx][0] < this.data[leftIdx][0])
          ) {
            swap = rightIdx;
          }
        }
        if (swap === null) break;
        this.data[idx] = this.data[swap];
        this.data[swap] = element;
        idx = swap;
      }
    }
    size() { return this.data.length; }
  }

  const m = heightMap.length;
  if (m === 0) return 0;
  const n = heightMap[0].length;
  if (n === 0) return 0;

  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const heap = new MinHeap();

  // biên ngoài
  for (let i = 0; i < m; i++) {
    heap.push([heightMap[i][0], i, 0]);
    heap.push([heightMap[i][n - 1], i, n - 1]);
    visited[i][0] = true;
    visited[i][n - 1] = true;
  }
  for (let j = 0; j < n; j++) {
    heap.push([heightMap[0][j], 0, j]);
    heap.push([heightMap[m - 1][j], m - 1, j]);
    visited[0][j] = true;
    visited[m - 1][j] = true;
  }

  let water = 0;
  const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

  while (heap.size() > 0) {
    const [h, x, y] = heap.pop();
    for (const [dx, dy] of dirs) {
      const nx = x + dx, ny = y + dy;
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
        visited[nx][ny] = true;
        const nh = heightMap[nx][ny];
        if (nh < h) water += h - nh;
        heap.push([Math.max(h, nh), nx, ny]);
      }
    }
  }

  return water;
};
