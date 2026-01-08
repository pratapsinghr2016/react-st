const promises = [
  new Promise((_, reject) => setTimeout(() => reject("Error 1"), 100)),
  new Promise((resolve) => setTimeout(() => resolve("Second"), 300)),
  new Promise((resolve) => setTimeout(() => resolve("Third"), 200)),
]

const responseData = Promise.allSettled(promises);
responseData.then((re) => {
  console.log("res", re)
}).catch((err) => {
  console.log("err", err)
})
/* 
! if all are resolved or rejected [SETTLED]
*/

const myAllSettled = (promises) => {
  return new Promise((resolve, reject) => {
    let responses = [];
    let promiseSettled = 0;

    promises.forEach((currentPromise, index) => {

      currentPromise.then((res) => {
        // ! use index to maintaine order
        responses[index] = {
          status: "fulfilled",
          value: res
        }
      }).catch((err) => {
        responses[index] = {
          status: "rejected",
          reason: err
        }
      }).finally(() => {
        promiseSettled++; // Increment AFTER settling

        // Check if all are done
        if (promiseSettled === promises.length) {
          resolve(responses);
        }
      });

    });

  })
}


const responseTest = myAllSettled(promises);
responseTest.then((re) => {
  console.log("res", re)
}).catch((err) => {
  console.log("err", err)
})

