// code:

const mapFilter = (arr, func) => {
  return new Promise((resolve, reject) => {

    const result = [];
    let track = 0;

    arr.forEach((element, idx) => {

      func(element, (err, res) => {

        if (err) {
          reject(err)
        }

        track += 1;

        if (res) {
          result[idx] = res
        }

        if (track === arr.length) {
          const res2 = arr.filter((_, index) => result[index])
          resolve(res2)
        }


      })

    });

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