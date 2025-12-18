function asynReject(arr, cb) {
  let track = 0;
  let result = [];

  return new Promise((resolve, reject) => {
    for (let item of arr) {
      const idx = arr.indexOf(item)
      cb(item, (err, response) => {
        if (err) {
          reject(err)
        }

        track += 1;

        if (!response) {
          result[idx] = item
        }

        if (track === arr.length) {
          resolve(result.filter(Boolean))
        }

      })
    }
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