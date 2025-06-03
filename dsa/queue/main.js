class Queue {
  constructor() {
    this.items = {},
    this.front = 0,
    this.rear = 0
  }

  enqueue(element) {
    this.items[this.rear] = element,
    this.rear++
  }

  dequeue(){
    if(this.isEmpty()) return null
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++

    return item
  }

    peek() {
    if (this.isEmpty()) return null;
    return this.items[this.front];
  }

   isEmpty() {
    return this.front === this.rear;
  }

   size() {
    return this.rear - this.front;
  }

   print() {
    console.log(Object.values(this.items));
  }
}


const queue = new Queue();

queue.enqueue("Phong");
queue.enqueue("Trang");
queue.enqueue("Minh");

console.log(queue)
console.log(queue.peek()); 
console.log(queue.dequeue()); 
console.log(queue.dequeue()); 
console.log(queue.size()); 
queue.print(); 
