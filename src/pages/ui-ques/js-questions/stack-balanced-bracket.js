function areBracketsBalanced(str) {
  if (str.length % 2 !== 0) return false
  const brackArr = str.split("");
  const mapObj = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  const openingBrackets = Object.keys(mapObj)
  const closingBrackets = Object.values(mapObj)
  const allOpeningBrackets = []

  for (let bracket of brackArr) {
    if (openingBrackets.includes(bracket))
      allOpeningBrackets.push(bracket)
    else if (closingBrackets.includes(bracket)) {
      const poppedChar = allOpeningBrackets.pop();
      if (mapObj[poppedChar] !== bracket)
        return false
    }

  }

  return allOpeningBrackets.length === 0

}

console.log(areBracketsBalanced("()"))
console.log(areBracketsBalanced("()[]{}"))
console.log(areBracketsBalanced("({})[]"))
console.log(areBracketsBalanced("()[]{(}"))
