function LazyMan(name, fn) {

  let queue = []
  queue.push(() => fn(`Hi, I'm ${name}.`))


  this.eat = function (food) {
    queue.push(() => fn(`eat ${food}`))
    return this
  }

  this.sleep = function (time) {

    queue.push(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          fn(`Wake up after ${time} seconds.`)
          resolve()
        }, time * 1000)
      })
    })

    return this
  }


  this.sleepFirst = function (time) {

    queue.unshift(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          fn(`Wake up after ${time} seconds.`)
          resolve()
        }, time * 1000)
      })
    })

    return this
  }

  /*
  ! serialize the queue

  setTimeout(() => {
  queue.reduce((chain, task) => {
    return chain.then(() => task());
    }, Promise.resolve());
  }, 0);
  
  */


  setTimeout(async () => {
    for (let task of queue) {
      await task()
    }
  }, 0)




  return this
}

// test-1
// LazyMan('Jack', console.log)


// // test-2
// LazyMan('Jack', console.log)
//   .eat('banana')
//   .eat('apple')


// test-3
// LazyMan('Jack', console.log)
//   .eat('banana')
//   .sleep(10)
//   .eat('apple')
//   .sleep(1)

// test 4
LazyMan('Jack', console.log)
  .eat('banana')
  .sleepFirst(10)
  .eat('apple')
  .sleep(1)
