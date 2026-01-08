

/* 

const getTestFunc = () => {
  let count = 0;
  return () => {
    return new Promise((resolve, reject) => {
      count += 1;
      if (count < 5) {
        reject("Less than 5")
      } else {
        resolve("success")
      }
    })
  }
}

*/

// code:

function _retryWithDelay(cb, attempts, delay = 1000) {
  return cb().catch((error) => {
    if (attempts > 0) {
      return wait(delay).then(() => _retryWithDelay(cb, attempts - 1, delay))
    }
    throw error
  })
}


const wait = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

function retryWithDelay(cb, attempts, delay = 1000) {
  return new Promise((resolve, reject) => {
    return cb()
      .then(() => resolve())
      .catch((error) => {

        if (attempts > 0) {
          wait(delay)
            .then(() => retryWithDelay(cb, attempts - 1, delay))
            .then(() => resolve())
            .catch((err) => reject(err))

        } else {
          reject(error)
        }

      })
  })
}


// Input:

const getTestFunc = () => {
  let count = 0;
  return async () => {
    count += 1;
    if (count < 5) {
      throw new Error("Less than 5")
    }
  }
}

const test = async () => {
  await retryWithDelay(getTestFunc(), 10)
  console.log("10 attems > 5 limit = success")

  await retryWithDelay(getTestFunc(), 3)
  console.log("10 attems < 3 limit = success")
}

test().catch((err) => { console.log("err:", err) })
