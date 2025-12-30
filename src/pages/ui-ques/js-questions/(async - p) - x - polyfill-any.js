const promises = [
  new Promise((_, reject) => setTimeout(() => reject("Error 1"), 100)),
  new Promise((resolve) => setTimeout(() => resolve("Second"), 300)),
  new Promise((resolve) => setTimeout(() => resolve("Third"), 200)),
]
/* 
! if any promise is resolved first
*/

const response = Promise.any(promises)
response.then((res) => {
  console.log(res)
}).catch((err) => { console.log(err) })


const myResolveAny = (promisesArr) => {
  return new Promise((resolve, reject) => {
    let promisesExecuted = 0;


    promisesArr.forEach((currentPromise) => {
      currentPromise.then((currentPromiseResponse) => {

        resolve(currentPromiseResponse)

      }).catch((err) => {
        promisesExecuted += 1;
        if (promisesExecuted === promisesArr.length)
          reject("All promises rejected")
      })
    });


  })
}

const response2 = myResolveAny(promises)
response2.then((res) => {
  console.log(res)
}).catch((err) => { console.log(err) })
