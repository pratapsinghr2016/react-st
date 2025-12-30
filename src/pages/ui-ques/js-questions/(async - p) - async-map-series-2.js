// code:
// https://claude.ai/chat/06eab1f8-674d-44b3-a87b-ec426facf127

const mapSeries = (arr, func) => {
  return arr.reduce((acc, curr) => {

    return acc.then((prevVal) => {

      return func(curr).then((result) => [...prevVal, result])

    })

  }, Promise.resolve([]))

}



// Input:

function callback(num) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num = num * 2;
      console.log(num);

      if (num === 12) {
        reject(true); // error
      } else {
        resolve(num);
      }
    }, 1000);
  })
}

let numPromise = mapSeries([1, 2, 3, 4, 5], callback)


numPromise
  .then((result) => console.log("result: ", result))
  .catch((err) => console.log("err: ", err))