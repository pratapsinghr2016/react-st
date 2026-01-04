/* 
Given a list of promises and their priorities, call them 
parallelly and resolve with the value of the first promise 
with the most priority. If all the promises fail then reject with a custom error.

*/

function resolvePromiseWithPriority(promises) {
  // Sort by priority (highest priority = lowest number)
  const sortedPromises = [...promises].sort((a, b) => b.priority - a.priority);

  console.log(sortedPromises)
  /* 
   ! mistake i did last time
   ! executed them all at once and expected them to run one-by-one
   ! but its async so possibility could be like:
   const promises = [
    { task: createAsyncTasks(1), priority: 1 },  // Already started! Settles at 100ms
    { task: createAsyncTasks(2), priority: 3 },  // Already started! Settles at 200ms
    { task: createAsyncTasks(3), priority: 4 },  // Already started! Settles at 300ms
    { task: createAsyncTasks(4), priority: 2 }   // Already started! Settles at 400ms
  ]
  
    return new Promise((resolve, reject) => {
      let count = 0;
      sortedPromises.forEach((promise) => {
        promise.task.then((value) => {
          console.log("promise.priority", value, promise.priority)
          resolve({
            value,
            priority: promise.priority
          })
        }).catch(() => {
          count++
        })
      })
      if (count === sortedPromises.length) {
        reject("All promises failed")
      }
    })
  }
  */

  return new Promise((resolve, reject) => {
    let count = 0;
    let result = []
    sortedPromises.forEach((promise) => {
      promise.task.then((value) => {
        console.log("promise.priority", value, promise.priority)
        result.push({
          status: "fulfilled",
          value,
          priority: promise.priority
        })
      }).catch((value) => {
        result.push({
          status: "rejected",
          value,
          priority: promise.priority
        })
      })
        .finally(() => {
          count++
          if (count === sortedPromises.length) {
            for (let p of result) {
              if (p.status === "fulfilled") {
                resolve(p)
              }
            }
            reject("All got rejected")
          }
        })
    })
    if (count === sortedPromises.length) {
      reject("All promises failed")
    }
  })
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