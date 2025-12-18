class QueueItem {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority
  }
}

class PriorityQueue {

  constructor() {
    this.queue = [];
  }


  enqueue(element, priority) {
    const queueItem = new QueueItem(element, priority);
    let isAnyItemReplaced = false;

    for (let index = 0; index < this.queue.length; index += 1) {
      const { priority: currItemPriority } = this.queue[index];
      if (currItemPriority < priority) {
        this.queue.splice(index, 0, queueItem)
        isAnyItemReplaced = true
        break;
      }
    }

    if (!isAnyItemReplaced)
      this.queue.push(queueItem)

  }


  dequeue() {
    if (this.queue.length === 0) return null;
    return this.queue.shift();
  }

  peek() {
    return this.queue.length > 0 ? this.queue[0] : null;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  display() {
    return this.queue.map(item => `${item.element} (priority: ${item.priority})`);
  }


}

const pq = new PriorityQueue();

pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 5);
pq.enqueue("Task 3", 1);
pq.enqueue("Task 4", 3);

console.log(pq.display());

console.log(pq.dequeue()); // QueueItem { element: 'Task 2', priority: 5 }
console.log(pq.dequeue()); // QueueItem { element: 'Task 4', priority: 3 }
console.log(pq.display());

/* 
splice alt::

enqueue(element, priority) {
  const queueItem = { element, priority };
  const newQueue = [];
  let inserted = false;

  for (let i = 0; i < this.queue.length; i++) {
    if (!inserted && priority > this.queue[i].priority) {
      newQueue.push(queueItem); // Insert here
      inserted = true;
    }
    newQueue.push(this.queue[i]); // Add existing element
  }

  if (!inserted) newQueue.push(queueItem);
  
  this.queue = newQueue;
}

*/