class DoubleEndedQueue {
  constructor(capacity) {
    this.data = new Array(capacity)
    this.capacity = capacity
    this.front = 0
    this.rear = 0
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  isFull() {
    return this.size === this.capacity
  }

  pushBack(value) {
    if (this.isFull()) {
      console.log("Queue is full. Cannot pushBack", value)
      return false
    }
    this.data[this.rear] = value
    this.rear = (this.rear + 1) % this.capacity
    this.size++
    console.log(`pushBack ${value}: data=${this.data}, front=${this.front}, rear=${this.rear}, size=${this.size}`)
    return true
  }

  pushFront(value) {
    if (this.isFull()) {
      console.log("Queue is full. Cannot pushFront", value)
      return false
    }
    this.front = (this.front - 1 + this.capacity) % this.capacity
    this.data[this.front] = value
    this.size++
    console.log(`pushFront ${value}: data=${this.data}, front=${this.front}, rear=${this.rear}, size=${this.size}`)
    return true
  }

  popFront() {
    if (this.isEmpty()) {
      console.log("Queue is empty. Cannot popFront")
      return null
    }
    const val = this.data[this.front]
    this.data[this.front] = undefined
    this.front = (this.front + 1) % this.capacity
    this.size--
    console.log(`popFront: ${val}, data=${this.data}, front=${this.front}, rear=${this.rear}, size=${this.size}`)
    return val
  }

  popBack() {
    if (this.isEmpty()) {
      console.log("Queue is empty. Cannot popBack")
      return null
    }
    this.rear = (this.rear - 1 + this.capacity) % this.capacity
    const val = this.data[this.rear]
    this.data[this.rear] = undefined
    this.size--
    console.log(`popBack: ${val}, data=${this.data}, front=${this.front}, rear=${this.rear}, size=${this.size}`)
    return val
  }

  frontValue() {
    if (this.isEmpty()) return null
    return this.data[this.front]
  }

  backValue() {
    if (this.isEmpty()) return null
    return this.data[(this.rear - 1 + this.capacity) % this.capacity]
  }
  printQueueWithIndex() {
  for (let i = 0; i < this.size; i++) {
    let index = (this.front + i) % this.capacity;
    console.log(`Index ${index}: ${this.data[index]}`);
  }
}

}

const deque = new DoubleEndedQueue(5)

deque.pushBack(1)
deque.pushBack(2)
deque.pushBack(3)
deque.pushFront(8)
deque.printQueueWithIndex()
// deque.pushFront(9)

console.log('Front:', deque.frontValue())
console.log('Back:', deque.backValue())

deque.popFront()
deque.popBack()
deque.popFront()
deque.popBack()
deque.popFront()
deque.popFront()
