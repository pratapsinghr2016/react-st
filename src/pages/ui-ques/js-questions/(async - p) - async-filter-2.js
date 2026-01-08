// code:

const mapFilter = (arr, asyncFunc) => {
  const promises = arr.map((element) => asyncFunc(element));

  return Promise.all(promises).then((results) => {
    // results = [true, false, true, true, true] (booleans)
    // Filter elements where result is true
    return arr.filter((_, index) => results[index]);
  });
};

// Input:

let numPromise = mapFilter([1, 2, 3, 4, 5], (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num = num * 2;
      console.log(num);

      if (num === 7) {
        reject(true);
      } else {
        resolve(num != 4);  // resolves with boolean
      }
    }, 1000);
  });
})


numPromise
  .then((result) => console.log("result: ", result))
  .catch((err) => console.log("err: ", err))