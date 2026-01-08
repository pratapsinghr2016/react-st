/* 
Before promises/async/await became the standard, it was a convention 
for async APIs in JavaScript to accept callbacks as the last argument. 
Many async versions of Node.js APIs (e.g. fs.readFile and fs.rm) have 
such signatures. Node.js' util.promisify function was created to wrap 
around callback-based functions by returning Promises so that they can be 
used with async/await.

Implement a function promisify that takes a function following the 
common callback-last error-first style, i.e. taking a (err, value) => ... callback 
as the last argument, and returns a version that returns promises.

*/

function promisify(fn) {
  return function (...args) {

    return new Promise((resolve, reject) => {

      const cb = function (err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      }

      fn.call(this, ...args, cb)

    })

  }
}



function fakeFetch(url, options) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve({ data: `Response from ${url}`, options });
      } else {
        reject(new Error('URL is required'));
      }
    }, 1000);
  });
}

function foo(url, options, callback) { //  call back is last
  fakeFetch(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

const promisifiedFoo = promisify(foo);
promisifiedFoo('example.com', { foo: 1 })
  .then((res) => console.log(res))  // { data: 'Response from example.com', options: { foo: 1 } }
  .catch((err) => console.log(err));
