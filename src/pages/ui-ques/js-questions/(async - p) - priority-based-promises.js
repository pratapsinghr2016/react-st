/* 
Given a list of promises and their priorities, call them 
parallelly and resolve with the value of the first promise 
with the most priority. If all the promises fail then reject with a custom error.

*/

function resolvePromiseWithPriority(promises) {
  // Sort by priority (highest priority = lowest number)
  const sorted = [...promises].sort((a, b) => a.priority - b.priority);

  // Wait for all to settle, then pick first successful
  return Promise.allSettled(sorted.map(p => p.task))
    .then((results) => {
      for (let i = 0; i < results.length; i++) {
        if (results[i].status === 'fulfilled') {
          return {
            val: results[i].value,
            priority: sorted[i].priority
          };
        }
      }
      return Promise.reject("All APIs Failed");
    });
}


function createAsyncTasks(value) {
  // const value = Math.floor(Math.random() * 10);
  // console.log("fn:", value)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 2) {
        reject(new Error("rejected"))
      } else {
        resolve(value)
      }
    }, value * 100)
  })
}

const promises = [
  { task: createAsyncTasks(1), priority: 1 },
  { task: createAsyncTasks(2), priority: 4 },
  { task: createAsyncTasks(3), priority: 3 },
  { task: createAsyncTasks(4), priority: 2 }
]

resolvePromiseWithPriority(promises)
  .then((res) => { console.log(res) })
  .catch((err) => { console.log(err) })