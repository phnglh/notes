class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this._siftUp();
    }
    
    pop() {
        const top = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._siftDown();
        }
        return top;
    }
    
    _siftUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx][0] <= element[0]) break;
            this.heap[idx] = this.heap[parentIdx];
            idx = parentIdx;
        }
        this.heap[idx] = element;
    }
    
    _siftDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swapIdx = null;
            
            if (leftIdx < length) {
                if (this.heap[leftIdx][0] < element[0]) swapIdx = leftIdx;
            }
            if (rightIdx < length) {
                if ((swapIdx === null && this.heap[rightIdx][0] < element[0]) ||
                    (swapIdx !== null && this.heap[rightIdx][0] < this.heap[leftIdx][0])) {
                    swapIdx = rightIdx;
                }
            }
            if (swapIdx === null) break;
            this.heap[idx] = this.heap[swapIdx];
            idx = swapIdx;
        }
        this.heap[idx] = element;
    }
    
    size() {
        return this.heap.length;
    }
}

var swimInWater = function(grid) {
    const n = grid.length;
    const visited = Array.from({length: n}, () => Array(n).fill(false));
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    const heap = new MinHeap();
    
    heap.push([grid[0][0], 0, 0]); // [cost, i, j]
    visited[0][0] = true;
    
    while (heap.size() > 0) {
        const [cost, i, j] = heap.pop();
        if (i === n - 1 && j === n - 1) return cost;
        
        for (const [di, dj] of dirs) {
            const ni = i + di, nj = j + dj;
            if (ni >= 0 && ni < n && nj >= 0 && nj < n && !visited[ni][nj]) {
                visited[ni][nj] = true;
                heap.push([Math.max(cost, grid[ni][nj]), ni, nj]);
            }
        }
    }
    return -1;
};

console.log(swimInWater([[0,2],[1,3]]))
