function promiseResolve(value) {
  if (value instanceof Promise) {
    return value;
  }

  return new Promise((resolve) => resolve(value));
}


// Case 1: Native Promise - returns the same instance
const p1 = Promise.resolve(42);
console.log(promiseResolve(p1) === p1); // true

// Case 2: Non-thenable - fulfilled promise with the value
promiseResolve(100).then(console.log); // 100
promiseResolve('hello').then(console.log); // "hello"

// Case 3: Thenable - follows the thenable's state
const thenable = {
  then(resolve, reject) {
    setTimeout(() => resolve('from thenable'), 100);
  }
};
promiseResolve(thenable).then(console.log); // "from thenable" (after 100ms)

// Thenable that rejects
const rejectingThenable = {
  then(resolve, reject) {
    reject('error from thenable');
  }
};
promiseResolve(rejectingThenable).catch(console.log); // "error from thenable"