/* 
- execute in given sequence
- in contrast to promise.all() where all execute at once

*/



const asyncTask = (i) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve("executed - " + i) }, i * 1000)
  })
}

const asyncTasks = [
  () => asyncTask(1),
  () => asyncTask(3),
  () => asyncTask(2),
  () => asyncTask(4),
]

// Attempt-1
const executeAsyncTasks = async (taskList) => {
  for (let item of taskList) {
    const result = await item()
    console.log("result:", result)
  }
}

executeAsyncTasks(asyncTasks)

// Attempt - 2
const execcuteAsyncTasksRecc = (taskList) => {
  const currentTask = taskList.shift();
  currentTask().then((res) => {
    console.log("response - ", res)

    if (taskList.length)
      execcuteAsyncTasksRecc(taskList)

  }).catch((err) => {
    console.log("error : ", err)
  })
}

execcuteAsyncTasksRecc(asyncTasks)

// Attempt 3
const executeInSequence = (taskList) => {
  return taskList.reduce((acc, curr) => {

    return acc.then(() => {

      return curr().then((val) => console.log("response - ", val))
    })
  }, Promise.resolve())
}

executeInSequence(asyncTasks)