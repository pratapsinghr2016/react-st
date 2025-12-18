function sum(...args) {
  const total = args.reduce((acc, curr) => acc + curr, 0)

  if (args.length >= 5) {
    return total
  }

  return function inner(...nextArgs) {
    return sum(...args, ...nextArgs)
  }
}

console.log(sum(1, 2, 3, 4, 5))      // → 15
console.log(sum(1)(2)(3)(4)(5))      // → 15
console.log(sum(1, 2)(3)(4, 5))      // → 15