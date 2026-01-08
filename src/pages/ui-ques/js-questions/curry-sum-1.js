function sum(...args) {
  const total = args.reduce((acc, curr) => acc + curr, 0)

  return function inner(...nextArgs) {
    if (nextArgs.length === 0) {
      return total
    }
    return sum(...args, ...nextArgs)
  }
}

console.log(sum(1, 2, 3, 4, 5)())    // → 15
console.log(sum(1)(2)(3)(4)(5)())    // → 15
console.log(sum(1)(2)(3)())          // → 6