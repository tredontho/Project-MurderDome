"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._top = 0;
        this._parent = i => ((i + 1) >>> 1) - 1;
        this._left = i => (i << 1) + 1;
        this._right = i => (i + 1) << 1;
        this._heap = [];
        this._comparator = comparator;
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        console.log(this._heap[i]);
        console.log(this._heap[j]);
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
        console.log(this._heap[i]);
        console.log(this._heap[j]);
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > this._top && this._greater(node, this._parent(node))) {
            this._swap(node, this._parent(node));
            node = this._parent(node);
        }
    }
    _siftDown() {
        let node = this._top;
        while ((this._left(node) < this.size() && this._greater(this._left(node), node)) ||
            (this._right(node) < this.size() && this._greater(this._right(node), node))) {
            let maxChild = (this._right(node) < this.size() && this._greater(this._right(node), this._left(node))) ? this._right(node) : this._left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() == 0;
    }
    peek() {
        return this._heap[this._top];
    }
    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > this._top) {
            //this._swap(top, bottom);
        }
        console.log(this._heap);
        console.log(this._top);
        console.log(bottom);
        console.log(this._heap[this._top]);
        console.log(this._heap[bottom]);
        console.log(this._heap.length);
        //this._heap.pop();
        //console.log(this._heap.length);
        //this._siftDown();
        //console.log(this._heap[this._top]);
        //console.log(this._heap[bottom]);
        return poppedValue;
    }
    replace(value) {
        const replacedValue = this.peek();
        this._heap[this._top] = value;
        this._siftDown();
        return replacedValue;
    }
}
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=PriorityQueue.js.map