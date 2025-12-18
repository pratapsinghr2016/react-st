const asyncTask = (i) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve("executed - " + i) }, i * 1000)
  })
}

const asyncTasks = [
  () => asyncTask(1),
  () => asyncTask(3),
  () => asyncTask(2),
  () => asyncTask(4),
]

// Attemp 1
const executeParallel = async (tasks, cb) => {
  const result = await Promise.all(tasks.map(task => task()));
  cb(result);
}

executeParallel(asyncTasks, (result) => {
  console.log("result", result)
})

// Attempt 2
function executeParallel2(taskList, cbToCaptureResult) {
  let result = [];
  let count = 0;

  for (let task of taskList) {
    task()
      .then((val) => {
        count += 1
        result.push(val)
        if (count === taskList.length)
          cbToCaptureResult(result)
      })
      .catch((err) => console.log(err))
  }
}


executeParallel2(asyncTasks, (result) => {

  console.log("result", result)
})