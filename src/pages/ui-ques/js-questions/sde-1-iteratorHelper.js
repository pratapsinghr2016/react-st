
const iteratorHelper = (arr) => {
  let index = 0;
  return {
    next: () => {
      return arr[index++] || null
    },
    done: () => (index) === arr.length
  }
}

const iterator = iteratorHelper([1, 2, "hello"]);

console.log(iterator.next()); // 1
console.log(iterator.next()); // 2
console.log(iterator.done()); // false
console.log(iterator.next()); // "hello"
console.log(iterator.done()); // true
console.log(iterator.next()); // "null"