function QueueUsingStack() {
  this.stack1 = [];
  this.stack2 = []
}

QueueUsingStack.prototype.enqueue = function (val) {
  this.stack1.push(val)
}
QueueUsingStack.prototype.dequeue = function () {
  if (this.stack2.length === 0)
    while (this.stack1.length)
      this.stack2.push(this.stack1.pop())

  return this.stack2.pop()
}

QueueUsingStack.prototype.front = function () {
  if (this.stack2.length === 0)
    while (this.stack1.length)
      this.stack2.push(this.stack1.pop())

  return this.stack2[this.stack2.length - 1]

}

QueueUsingStack.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0
}

const qObj = new QueueUsingStack()
qObj.enqueue(1)
qObj.enqueue(2)
qObj.enqueue(3)
qObj.enqueue(4)
console.log(qObj.stack1)
console.log(qObj.front())
