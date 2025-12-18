const CircularQueue = function (size) {
  this.queue = Array.from({ length: size });
  this.size = size;
  this.rear = -1;
  this.front = -1;
  this.count = 0
}

CircularQueue.prototype.enqueue = function (val) {
  if (this.count === this.size)
    return "queue is full"

  if (this.front === -1)
    this.front = 0;

  this.rear = (this.rear + 1) % this.size
  this.queue[this.rear] = val;
  this.count++;

  return true;
}

CircularQueue.prototype.dequeue = function () {
  if (this.count === 0)
    return "queue is empty"

  const item = this.queue[this.front]
  if (this.rear === this.front) {
    this.rear = -1;
    this.front = -1;
  } else {
    this.front = (this.front + 1) % this.size;
  }

  this.count--;
  return item

}

CircularQueue.prototype.front = function () {
  if (this.count === 0)
    return "queue is empty"
  return this.queue[this.front]
}

CircularQueue.prototype.rear = function () {
  if (this.count === 0)
    return "queue is empty"
  return this.queue[this.rear]
}