const getArrayChopped = (arr, limit) => {
  let i = 0;
  let res = [];
  while (i < arr.length) {
    res.push(arr.slice(i, limit + i));
    i += limit;
  }
  return res;
};

const mapLimit = (arr, limit, cb) => {
  const choppedArray = getArrayChopped(arr, limit);

  return choppedArray.reduce((acc, currChunk) => {

    return acc.then((prevVal) => {

      // Wrap each callback-style call in a Promise
      const promises = currChunk.map((item) => {
        return new Promise((resolve, reject) => {
          cb(item, (error, value) => {
            if (error) reject(error);
            else resolve(value);
          });
        });
      });

      // Promise.all handles: counting, ordering, collecting
      return Promise.all(promises).then((chunkResults) => {
        return [...prevVal, ...chunkResults];
      });

    });

  }, Promise.resolve([]));
};

// Input (callback-style)
let numPromise = mapLimit([1, 2, 3, 4, 5], 3, (num, callback) => {
  setTimeout(() => {
    num = num * 2;
    console.log(num);
    if (num === 6) {
      callback(true);
    } else {
      callback(null, num);
    }
  }, 2000);
});

numPromise
  .then((result) => console.log("result:", result))
  .catch((err) => console.log("err:", err));