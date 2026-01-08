function instanceOf(obj, target) {
  if (!target && typeof target !== "object")
    return false;

  while (obj) {
    if (obj.__proto__ === target.prototype)
      return true;
    obj = obj.__proto__
  }
  return false
}

class A { }
class B extends A { }

const obj = new B()
console.log(instanceOf(obj, A))
console.log(instanceOf(obj, B))
console.log(instanceOf({}, B))