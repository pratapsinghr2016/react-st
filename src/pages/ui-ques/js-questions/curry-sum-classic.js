function sum(arg) {


  function inner(secondArg) {
    if (!secondArg) {
      return arg
    } else {
      return sum(arg + secondArg)
    }
  }
  return inner
}


console.log(sum(1)(2)(3)())