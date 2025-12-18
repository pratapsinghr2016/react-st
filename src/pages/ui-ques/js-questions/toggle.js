function toggle(arg1, arg2) {
  let x = 0;

  return function () {
    if (arg2 === undefined)
      return arg1
    x += 1
    return x % 2 !== 0 ? arg1 : arg2
  }
}


const hello = toggle("hello")
console.log(hello())
console.log(hello())

const onOff = toggle("on", "off")
console.log(onOff())
console.log(onOff())
console.log(onOff())
