const promise1 = new Promise((resolve, reject) => {
  resolve("resolved-1")
})

const promise2 = new Promise((resolve, reject) => {
  resolve("resolved-2")
})

const promise3 = new Promise((resolve, reject) => {
  resolve("resolved-3")
})

const result = Promise.all([promise1, promise2, promise3]);
result.then((res) => {

  console.log("result", res)
}).catch((err) => console.log(err))

/* 
! if all promise are resolved
*/

const myPromise = (promisesArr) => {
  return new Promise((resolve, reject) => {
    let index = 0;
    let resolvedResponses = [];


    promisesArr.forEach((currentPromise) => {
      currentPromise.then((currentResolvedPromiseVal) => {
        resolvedResponses[index++] = currentResolvedPromiseVal;
        if (index === promisesArr.length) // keep recording responses untill all are resolved
          resolve(resolvedResponses)
      }).catch((err) => {
        reject(err)
      })
    });

  })
}

const result2 = myPromise([promise1, promise2, promise3])
result2.then((res) => {

  console.log("result", res)
}).catch((err) => console.log(err))
