function getReverseString(str) {
  const stack = str.split(" ")
  let reverseStrArr = [];

  for (let idx = stack.length; idx >= 0; idx--) {
    if (stack[idx])
      reverseStrArr.push(stack[idx])
  }
  return reverseStrArr.join(" ").trim()
}

const str = "the sky is blue" // "blue is the sky"
const str2 = "  hello world  " // "world hello"
const str3 = "a good  example" // "example good a"
console.log(getReverseString(str))
console.log(getReverseString(str2))
console.log(getReverseString(str3))