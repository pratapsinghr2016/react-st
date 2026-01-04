Function.prototype.myApply = function (context, args) {

  const fn = this;
  if (typeof fn !== "function")
    throw new Error("Not a Function")
  if (!Array.isArray(args))
    throw new Error("Not an array")

  context.fn = fn;
  return context.fn(...args)
}


const animal = {
  color: "brown"
}

function speak(val) {
  console.log(this.color + " " + val)
}

speak.apply(animal, ["bark"])

speak.myApply(animal, ["bark"])