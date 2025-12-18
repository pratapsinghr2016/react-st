function sum(...args) {
  const total = args.reduce((prev, curr) => curr += prev, 0);

  function inner(...innerArgs) {
    if (innerArgs.length === 0) {
      return total
    } else {
      return sum(...args, ...innerArgs)
    }
  }

  inner.valueOf = () => total

  return inner

}

console.log(+sum(1, 2, 3, 4, 5))      // → 15 (5 args, returns number)
console.log(+sum(1)(2)(3)(4)(5))      // → 15 (5 args, returns number)
console.log(+sum(1, 2)(3, 4, 5))
console.log(+sum(1, 2, 3, 4, 5))

console.log(sum(1)(2)(3)())          // → 6  (less than 5, needs empty call)
console.log(sum(1)(2)(3)(4)(5)())    // → 15
console.log(sum(1, 2, 3, 4, 5)())    // → 15