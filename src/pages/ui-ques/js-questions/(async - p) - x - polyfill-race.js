const promises = [
  new Promise((_, reject) => setTimeout(() => reject("Error 1"), 100)),
  new Promise((resolve) => setTimeout(() => resolve("Second"), 300)),
  new Promise((resolve) => setTimeout(() => resolve("Third"), 200)),
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