
/* 
Implement a function that accepts two promises and returns a single Promise. 
This returned promise fulfills when both input promises fulfill, with a single 
value according to the order and types of the fulfillment values:

Numbers should be added together.
Strings should be concatenated.
Arrays should be combined into a single array.
Plain objects should be merged into a single object.
Other types aren't supported.
The return promise can also be rejected if one of the following happens:

The types of the fulfilled results do not match, reject with the string 
'Unsupported data types'.
One of the promises fail, reject with the rejected promise's reason.
Examples

await promiseMerge(Promise.resolve(1), Promise.resolve(2)); // 3
await promiseMerge(Promise.resolve('abc'), Promise.resolve('def')); // 'abcdef'
await promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
await promiseMerge(Promise.resolve({ foo: 1 }), Promise.resolve({ bar: 2 })); // { foo: 1, bar: 2}

await promiseMerge(Promise.resolve(1), Promise.resolve([])); // Rejected with 'Unsupported data types'
await promiseMerge(Promise.reject(1), Promise.resolve(2)); // Rejected with 1

*/

function promiseMerge(promise1, promise2) {

  return new Promise((resolve, reject) => {
    const response = Promise.all([promise1, promise2])
    response.then((valArr) => {
      const isString = valArr.every((item) => typeof item === "string");
      const isNumber = valArr.every((item) => typeof item === "number");
      const isObject = valArr.every((item) => item && typeof item === "object");
      const isArray = valArr.every((item) => Array.isArray(item));
      let reducedRes = null;
      if (isNumber) {
        reducedRes = valArr.reduce((prev, curr) => prev += curr, 0)
      } else if (isString) {
        reducedRes = valArr.reduce((prev, curr) => prev += curr, "")
      } else if (isArray) {
        reducedRes = [...valArr[0], ...valArr[1]]
      } else if (isObject) {
        reducedRes = { ...valArr[0], ...valArr[1] }
      } else {
        reject("Rejected type")
      }
      resolve(reducedRes)
    })

  })
}

const res = promiseMerge(Promise.resolve({ foo: 1 }), Promise.resolve(2));
res
  .then((res) => console.log(res))
  .catch((err) => console.log(err))