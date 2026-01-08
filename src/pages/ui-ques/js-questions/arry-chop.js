function arrayChop(arr, size) {

  let i = 0;
  let res = []
  while (i < arr.length) {
    res.push(arr.slice(i, i + size))
    i = i + size;
  }
  return res
}

console.log(arrayChop([1, 2, 3, 4, 5, 6, 7, 8], 2))