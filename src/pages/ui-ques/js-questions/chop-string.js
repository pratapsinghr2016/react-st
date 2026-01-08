function chopString(str, size) {
  const arr = str.split("")
  let res = []
  let i = 0;

  while (i < arr.length) {
    res.push(arr.slice(i, i + size).join(""))
    i = i + size
  }
  return res

}

console.log(chopString("javascript", 4))