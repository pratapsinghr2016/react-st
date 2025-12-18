// code:
// https://claude.ai/chat/06eab1f8-674d-44b3-a87b-ec426facf127

const mapSeries = (arr, func) => {
  return new Promise((resolve, reject) => {

    const final = arr.reduce((acc, curr) => {

      return acc.then((prevVal) => {

        return new Promise((inRes, inRej) => { // line x

          func(curr, (err, result) => {

            if (err)
              inRej(err)
            else
              inRes([...prevVal, result])

          })

        })

      })

    }, Promise.resolve([]))


    final.then((result) => {
      resolve(result)
    })
      .catch((err) => reject(err))

  })


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

let numPromise = mapSeries([1, 2, 3, 4, 5], callback)


numPromise
  .then((result) => console.log("result: ", result))
  .catch((err) => console.log("err: ", err))