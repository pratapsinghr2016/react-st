// code:

const getArrayChopped = (arr, limit) => {
  let i = 0;
  let res = []
  while (i < arr.length) {
    res.push(arr.slice(i, limit + i))
    i += limit

  }
  return res;
}

const mapLimit = (arr, limit, cb) => {

  const choppedArray = getArrayChopped(arr, limit)
  return choppedArray.reduce((acc, currChunk) => {

    return acc.then((prevVal) => { // line b

      return new Promise((resolveChunkItem, rejectChunkItem) => { // line c
        const result = [];
        let taskCompleted = 0;

        currChunk.forEach((currChunkItem, index) => {

          cb(currChunkItem, (error, value) => {
            if (error) {
              rejectChunkItem(error)
            } else {
              result[index] = value
              taskCompleted += 1;
              if (taskCompleted === currChunk.length) {
                resolveChunkItem([...prevVal, ...result])
              }
            }
          })

        });

      })

    })

  }, Promise.resolve([]))
}



// Input:

let numPromise = mapLimit([1, 2, 3, 4, 5], 3, (num, callback) => {

  setTimeout(() => {
    num = num * 2;
    console.log(num);
    if (num === 6) {
      callback(true)
    } else {

      callback(null, num)
    }

  }, 2000)
})


numPromise
  .then((result) => { console.log("result: ", result) })
  .catch((err) => { console.log("err: ", err) })