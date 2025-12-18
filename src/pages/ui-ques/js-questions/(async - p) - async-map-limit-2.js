const getArrayChopped = (arr, limit) => {
  let i = 0;
  let res = [];
  while (i < arr.length) {
    res.push(arr.slice(i, limit + i));
    i += limit;
  }
  return res;
};

const mapLimit = (arr, limit, asyncFunc) => {
  const choppedArray = getArrayChopped(arr, limit);

  return choppedArray.reduce((acc, currChunk) => {
    return acc.then((prevVal) => {
      const promises = currChunk.map((item) => asyncFunc(item));
      return Promise.all(promises).then((chunkResults) => {
        return [...prevVal, ...chunkResults];
      });
    });
  }, Promise.resolve([]));
};

// Input (Promise-based)
const asyncDouble = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num = num * 2;
      console.log(num);
      if (num === 6) {
        reject(true);
      } else {
        resolve(num);
      }
    }, 2000);
  });
};

mapLimit([1, 2, 3, 4, 5], 3, asyncDouble)
  .then((result) => console.log("result:", result))
  .catch((err) => console.log("err:", err));