const promises = [
  new Promise(resolve => setTimeout(() => resolve("Slow - 3s"), 3000)),
  new Promise(resolve => setTimeout(() => resolve("Medium - 1s"), 1000)),
  new Promise(resolve => setTimeout(() => resolve("Fast - 100ms"), 100))
];

const responseDemo = Promise.race(promises);
responseDemo.then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
/* 
! whatever is settled first
*/

const myPromiseRace = (promises) => {

  return new Promise((resolve, reject) => {

    promises.forEach((currentPromise) => {

      currentPromise.then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })

    });

  })

}

const responseTest = myPromiseRace(promises);
responseTest.then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})