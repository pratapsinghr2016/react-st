function StackUsingQueue() {
  this.queue1 = [];
  this.queue2 = []
}

StackUsingQueue.prototype.push = function (val) {
  // this.queue1.forEach((item, index) => {
  //   this.queue2.push(this.queue1.shift())
  // })
  // this.queue1.push(val)
  // this.queue2.forEach((item, index) => {
  //   this.queue1.push(this.queue2.shift())
  // })
  while (this.queue1.length)
    this.queue2.push(this.queue1.shift())
  this.queue1.push(val)
  while (this.queue2.length)
    this.queue1.push(this.queue2.shift())
}

StackUsingQueue.prototype.pop = function () {
  return this.queue1.pop()
}

StackUsingQueue.prototype.isEmpty = function () {
  return this.queue1.length === 0
}

StackUsingQueue.prototype.top = function () {
  return this.queue1[0]
}

const stackObj = new StackUsingQueue();
stackObj.push(6)
stackObj.push(7)
stackObj.push(8)

console.log(stackObj.queue1)
// console.log(stackObj.queue2)
console.log(stackObj.pop())
stackObj.push(9)
console.log(stackObj.queue1)
console.log(stackObj.top())
console.log(stackObj.isEmpty())
