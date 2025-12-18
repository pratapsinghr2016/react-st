function split(string, delimeter) {
  if (!delimeter.length)
    return Array.from(string)

  let response = []

  function splitter(str, startIdx) {
    if (startIdx >= string.length) return

    const delIdx = str.indexOf(delimeter)

    if (delIdx >= 0) {
      const subStr = str.substring(0, delIdx)
      response.push(subStr)

      splitter(str.substring(delIdx + delimeter.length), delIdx + delimeter.length)
    } else {
      response.push(str)
    }

  }

  splitter(string, 0)
  return response
}

console.log("helloworld".split("o"))
console.log(split("helloworld", "o"))