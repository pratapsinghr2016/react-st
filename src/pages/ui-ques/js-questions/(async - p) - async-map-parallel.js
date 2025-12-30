// code:
// https://claude.ai/chat/06eab1f8-674d-44b3-a87b-ec426facf127

const mapParallel = (arr, func) => {
  const promises = arr.map((item) => {
    return new Promise((resolve, reject) => {
      func(item, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  })

  return Promise.all(promises)

}



// Input:

function callback(num, callback) {

  setTimeout(() => {
    num = num * 2;
    console.log(num);

    if (num === 12) {
      callback(true) // error true
    } else {
      callback(null, num)
    }

  }, 1000)
}

let numPromise = mapParallel([1, 2, 3, 4, 5], callback)


numPromise
  .then((result) => console.log("result: ", result))
  .catch((err) => console.log("err: ", err))