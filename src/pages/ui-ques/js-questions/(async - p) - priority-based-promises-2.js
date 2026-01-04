/* 
Given a list of promises and their priorities, call them 
parallelly and resolve with the value of the first promise 
with the most priority. If all the promises fail then reject with a custom error.

! I TRIED SERIES !!
*/


function resolvePromiseWithPriority(promises) {
  // Sort by priority (highest priority = lowest number)
  const sortedPromises = [...promises].sort((a, b) => b.priority - a.priority);

  console.log(sortedPromises)

  return new Promise((resolve, reject) => {
    let task = 0;
    let result = {}

    sortedPromises.reduce((acc, curr) => {
      return acc.then((prevVal) => {
        return curr.task().then((value) => {
          console.log("task", value)
          result = { value, priority: curr.priority }
          resolve(result)

        }).catch((err) => {

          task += 1
          if (task === sortedPromises.length) {
            reject("All promises rejected")
          }
        })
      })
    }, Promise.resolve())

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
  { task: () => createAsyncTasks(-1), priority: 1 },
  { task: () => createAsyncTasks(-2), priority: 3 },
  { task: () => createAsyncTasks(-3), priority: 4 },
  { task: () => createAsyncTasks(-4), priority: 2 }
]

resolvePromiseWithPriority(promises)
  .then((res) => { console.log(res) })
  .catch((err) => { console.log(err) })