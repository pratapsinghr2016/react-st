const promises = [
  Promise.resolve("promise - 1"),
  Promise.reject("promise - 2"),
  Promise.resolve("promise - 3")
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

