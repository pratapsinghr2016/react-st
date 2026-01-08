function slowFn(args) {
  let i = 0;
  while (i < 999999999) {
    i++
    i = i + args
  }
  return i
}

function memoizerFn(func) {
  let cache = new Map()
  return function (...args) {
    const key = JSON.stringify([...args])
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = func.call(this, ...args)
    cache.set(key, result)
    return result
  }
}

const memoizedFunction = memoizerFn(slowFn)

console.time('first')
console.log(memoizedFunction(88888888))
console.timeEnd('first')   // slow

console.time('second')
console.log(memoizedFunction(88888888))
console.timeEnd('second')  