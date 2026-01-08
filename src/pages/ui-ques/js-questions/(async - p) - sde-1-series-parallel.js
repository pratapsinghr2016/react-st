/* 

The problem statement reads as:

Write two functions:
A() returns 2 after 2 seconds
B() returns 3 after 3 seconds
Return their sum in two ways:
Parallel execution → Total time: 3 seconds
Sequential execution → Total time: 5 seconds

*/

const wait = (val, delay) => new Promise((resolve) => {
  setTimeout(() => resolve(val), delay)

})

const A = async () => {
  const val = await wait(2, 2000)
  return val
}

const B = async () => {
  const val = await wait(3, 3000)
  return val
}

const asyncTasks = [
  A,
  B
]

const parallelSum = async (tasks) => {
  const startTime = performance.now()

  const sum = await Promise.all(tasks.map((task) => task()))
  const val = sum.reduce((acc, curr) => {
    return acc = acc + curr
  }, 0)

  const endTime = performance.now();
  const timeDiff = Number.parseInt(endTime - startTime)
  console.log("sum", sum, "parallel-taken", timeDiff)
}

parallelSum(asyncTasks)


// sum in series
const sumInSeries = async (tasks) => {
  const startTime = performance.now()

  const sumSequencePromise = tasks.reduce((acc, curr) => {
    return acc.then((prevSum) => {
      return curr().then((res) => prevSum + res)
    })
  }, Promise.resolve(0))

  sumSequencePromise
    .then((result) => {
      const endTime = performance.now();
      const timeDiff = Number.parseInt(endTime - startTime);
      console.log("sum", result, "series-taken", timeDiff);
      return result;
    })
    .catch((err) => {
      console.log("Error:", err);  // See what's wrong
    });
}

const asyncTasksList = [
  A,
  B
]

sumInSeries(asyncTasksList)