// function promiseTimeout(promise, delay) {
//   const startTime = Date.now();
//   return promise.finally(() => {
//     if (Date.now() - startTime > delay)
//       throw new Error("Promise timeout")
//   })
// }
/* 
Wrong because the promise is getting executed regardless how much delay is there.
Expected behavior is do not let promise run if its duration > delay

*/

function promiseTimeout(promise, delay) {

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject("Promise Timeout"), delay)
  })

  return Promise.race([promise, timeoutPromise])

}


function fakeFetch(latency) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that resolves after `latency`.
    setTimeout(() => {
      resolve('Data successfully fetched!');
    }, latency);
  });
}

promiseTimeout(fakeFetch(1000), 2000)
  .then((res) => console.log(res));
// console.log(response); // Data successfully fetched!

promiseTimeout(fakeFetch(5000), 2000)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// "Promise timeout" thrown.