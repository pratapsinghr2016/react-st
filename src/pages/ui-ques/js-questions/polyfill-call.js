const animal = {
  color: "brown"
}

function speak(say) {
  console.log(this.color + " " + say)
}

speak.call(animal, "bark")

Function.prototype.myCall = function (ctx, ...args) {
  const fn = this;
  fn.apply(ctx, [...args])
}

speak.myCall(animal, "bark")


Function.prototype.myCall2 = function (context, ...args) {
  const fn = this;
  context.fn = fn
  context.fn(...args)
}

speak.myCall2(animal, "bark")
