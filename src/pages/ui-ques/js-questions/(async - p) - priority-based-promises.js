function resolvePromiseWithPriority(promises) {
  const sortedBasedOnPromise = promises.sort((promiseA, promiseB) =>
    promiseA.priority - promiseB.priority)

  let completed = 0;
  let resolved = [];  // Track by index

  return new Promise((resolve, reject) => {
    sortedBasedOnPromise.forEach(({ task, priority }, index) => {
      task
        .then((val) => {
          resolved[index] = { val, priority };  // ✅ Store both value and priority
        })
        .catch((err) => {
          // Don't need to store rejected values
        })
        .finally(() => {
          completed++;

          // Find first resolved promise by checking indices in order
          for (let i = 0; i < sortedBasedOnPromise.length; i++) {
            console.log(resolved[i])
            if (resolved[i]) {
              return resolve(resolved[i].priority);  // ✅ Now has .priority
            }
          }

          if (completed === promises.length) {
            reject("All APIs Failed");
          }
        })
    })
  })
}


function createAsyncTasks() {
  const value = Math.floor(Math.random() * 10);
  console.log("fn:", value)
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
  { task: createAsyncTasks(), priority: 1 },
  { task: createAsyncTasks(), priority: 4 },
  { task: createAsyncTasks(), priority: 3 },
  { task: createAsyncTasks(), priority: 2 }
]

resolvePromiseWithPriority(promises)
  .then((res) => { console.log(res) })
  .catch((err) => { console.log(err) })