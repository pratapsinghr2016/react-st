const myFlatten = (arr) => {
  if (!arr)
    return []
  const falttenedArray = arr.reduce((prev, curr) => {
    if (Array.isArray(curr)) {
      return [...prev, ...myFlatten(curr)]
    } else {

      return [...prev, curr]
    }
  }, [])
  return falttenedArray
}

const arr = [[[1, [1.1]], 2, 3], [4, 5]]

console.log("my-flat::=>", myFlatten(arr))

const myFlatten2 = (arr) => {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = [...res, ...myFlatten2(item)]

    } else {
      res = [...res, item]
    }
  }
  return res
}

console.log("my-flat::", myFlatten2(arr))