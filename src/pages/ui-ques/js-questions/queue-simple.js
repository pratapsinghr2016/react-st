class Queue {
  constructor() {
    this.items = []
  }

  enqueue(item) {
    this.items.push(item)
  }

  dequeue() {
    return this.items.pop()
  }

  peek() {
    return this.isEmpty() ? null : this.items[0]
  }

  display() {
    return this.isEmpty() ? [] : this.items
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length;
  }

}


const queue = new Queue();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue.display()); // ["A", "B", "C"]
console.log(queue.peek());    // "A" (doesn't remove)
console.log(queue.dequeue()); // "A" (removes and returns)
console.log(queue.display()); // ["B", "C"]
console.log(queue.size());  