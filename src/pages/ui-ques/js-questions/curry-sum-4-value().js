function add(...args) {
  const sum = args.reduce((prev, curr) => prev += curr, 0)

  function inner(...args2) {
    if (args2.length === 0) {
      return sum
    }

    return add(sum, ...args2)
  }
  inner.value = function () {
    return sum + 1
  }
  return inner
}


console.log(add(1, 2, 3)())
console.log(add(1, 2, 3).value())