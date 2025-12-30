// code:

const mapFilter = (arr, func) => {
  const promises = arr.map((item) => {
    return new Promise((resolve, reject) => {
      func(item, (err, condition) => {
        if (err)
          reject(err)
        else
          resolve(condition)
      })
    })
  })

  return Promise.all(promises).then((res) => {
    return arr.filter((_, index) => res[index])
  })

}



// Input:

let numPromise = mapFilter([1, 2, 3, 4, 5], (num, callback) => {

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