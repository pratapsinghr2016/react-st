function heavyComputation(...args) {
  console.log(args)
  let dummy = 0
  for (let i = 0; i < 100000; i++) {
    dummy += 1
  }
  const sum = [...args].reduce((acc, curr) => {
    return acc += curr
  }, 0)
  console.log(sum, dummy)
  return sum
}

// heavyComputation(1, 2, 3, 4)

const memoized = (cb) => {
  let mapObj = {}
  return function (...args) {
    const key = JSON.stringify([...args])
    if (mapObj[key]) {
      return mapObj[key]
    } else {

      return cb.apply(this, [...args])
    }
  }
}

const memoizedFn = memoized(heavyComputation)
console.time("start:")
console.log(memoizedFn(1, 2, 3))
console.time("end:")