function indexOfFirstOccur(str, subStr) {
  const windowSize = subStr.length;

  for (let i = 0; i <= str.length - windowSize; i++) {

    // approach-1
    // const currSubStr = str.substring(i, windowSize + i)
    // if (currSubStr === subStr) {
    //   return i
    // }

    let j = 0;
    for (j = 0; j < windowSize; j++) {
      if (str[i + j] !== subStr[j]) {
        break
      }
    }

    if (j == windowSize) {
      return i
    }


  }
  return -1
}


console.log(indexOfFirstOccur("sadbutsad", "sad")) // 0
console.log(indexOfFirstOccur("leetcode", "leeto")) // -1
console.log(indexOfFirstOccur("saturdaysad", "sad")) // 8
