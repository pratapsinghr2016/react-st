const promises = [
  new Promise((_, reject) => setTimeout(() => reject("Error 1"), 100)),
  new Promise((resolve) => setTimeout(() => resolve("Second"), 300)),
  new Promise((resolve) => setTimeout(() => resolve("Third"), 200)),
]

const result = Promise.all(promises);
result.then((res) => {

  console.log("result", res)
}).catch((err) => console.log(err))

/* 
! if all promise are resolved
*/

const myPromise = (promises) => {
  let response = []
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {

      promise
        .then((res) => {
          response[index] = res;
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => {
          if (response.length === promises.length) {
            resolve(response)
          }
        })

    });
  })
}

const result2 = myPromise([promise1, promise2, promise3])
result2.then((res) => {

  console.log("result", res)
}).catch((err) => console.log(err))
