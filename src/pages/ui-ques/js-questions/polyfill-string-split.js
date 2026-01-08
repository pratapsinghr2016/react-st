function split(string, delimeter) {
  const SL = string.length
  const DL = delimeter.length
  if (!DL)
    return Array.from(string)

  let response = []

  function splitter(str, startIdx) {
    if (startIdx >= SL) return

    const DI = str.indexOf(delimeter)

    if (DI >= 0) {
      const subStr = str.substring(0, DI) // ! 0, DI
      response.push(subStr)

      splitter(str.substring(DI + DL), DI + DL)
    } else {
      response.push(str)
    }

  }

  splitter(string, 0)
  return response
}

/* 
! DL, SL, DI
! splitter()

*/

console.log("helloworld".split("o"))
console.log(split("helloworld", "o"))