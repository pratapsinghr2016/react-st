/* 
In Map Async, we wrote a function that accepts an array of 
items and maps each element with an asynchronous mapping function 
and returns a Promise which resolves to the mapped results.

Practically, this can be used for mapping an input array with 
the results of calling an API where the input element is the argument
to the API. However, if your array has a large amount of items, you'd 
be making that many API calls at the same time which will almost certainly 
get you rate limited by the API service. We want to execute our tasks 
concurrently so that it is more efficient while staying within 
the rate limits of the API.

Implement a mapAsyncLimit function that takes in an optional 
parameter size, the maximum number of ongoing async tasks so 
that the input array can be processed in chunks of size, 
achieving parallelism while staying within the provided limit. 
If size is not specified, the chunk size is unlimited.

*/


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