class MaxHeap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }
    size() {
        return this.data.length;
    }
    push(item) {
        this.data.push(item);
        this._siftUp();
    }
    pop() {
        if (this.size() === 0) return null;
        const top = this.data[0];
        const last = this.data.pop();
        if (this.size() > 0) {
            this.data[0] = last;
            this._siftDown();
        }
        return top;
    }
    _siftUp() {
        let i = this.data.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.compare(this.data[i], this.data[p]) <= 0) break;
            [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
            i = p;
        }
    }
    _siftDown() {
        let i = 0;
        const n = this.size();
        while (true) {
            let largest = i;
            const l = i * 2 + 1;
            const r = i * 2 + 2;
            if (l < n && this.compare(this.data[l], this.data[largest]) > 0) largest = l;
            if (r < n && this.compare(this.data[r], this.data[largest]) > 0) largest = r;
            if (largest === i) break;
            [this.data[i], this.data[largest]] = [this.data[largest], this.data[i]];
            i = largest;
        }
    }
}

/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    const gain = (p, t) => (p + 1) / (t + 1) - p / t;

    const heap = new MaxHeap((a, b) => a[0] - b[0]);
    for (let [p, t] of classes) {
        heap.push([gain(p, t), p, t]);
    }

    while (extraStudents-- > 0) {
        let [g, p, t] = heap.pop();
        p++;
        t++;
        heap.push([gain(p, t), p, t]);
    }

    let sum = 0;
    while (heap.size() > 0) {
        let [_, p, t] = heap.pop();
        sum += p / t;
    }

    return sum / classes.length;
};
