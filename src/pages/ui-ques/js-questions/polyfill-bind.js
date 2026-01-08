

Function.prototype.myBind2 = function (context, ...args) {
  const fn = this;
  return function (...args2) {
    context.fn = fn;
    context.fn(...args, ...args2)
  }
}

const obj = {
  name: "John"
}

function greeting(age) {
  console.log("hello", this.name, age)
}

console.log(greeting.bind(obj, 20)())
console.log(greeting.myBind(obj, 20)())
console.log(greeting.myBind2(obj, 20)())