/*

Implement a function that takes an array of input and an async 
iteratee function and returns a promise that resolves with the 
list of inputs that has passed the test through iteratee function in JavaScript.

The inputs will run in parallel, but the output will be in 
the same order as the original.

The asynchronous iteratee function will accept an input 
and a callback. The callback function will be called when the 
input is finished processing, the first argument of the callback 
will be the error flag and the second will be the result.

*/

const mapFilter = (arr, func) => {
  return new Promise((resolve, reject) => {

    const result = [];
    let track = 0;

    arr.forEach((element, idx) => {

      func(element, (err, res) => {

        if (err) {
          reject(err)
        } else {
          track += 1;
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