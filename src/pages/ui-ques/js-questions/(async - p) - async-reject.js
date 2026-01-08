function asynReject(arr, cb) {

  const promises = arr.map((item) => {
    return new Promise((resolve, reject) => {
      cb(item, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  })

  return Promise.all(promises).then((res) => {
    return arr.filter((_, idx) => !res[idx])
  })

}

let numPromise = asynReject([1, 2, 3, 4, 5], (num, callback) => {

  setTimeout(() => {
    num = num * 2;
    console.log(num);

    if (num === 7) {
      callback(true) // error true
    } else {
      callback(null, num != 4)
    }

  }, 1000)
})


numPromise
  .then((result) => console.log("result: ", result))
  .catch((err) => console.log("err: ", err))