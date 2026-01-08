function filter(arr, cb) {

  let res = []

  for (let el of arr) {
    if (Array.isArray(el)) {
      res.push(filter(el, cb))
    }
    else if (cb(el))
      res.push(el)
  }
  return res
}


const arr = [[1, [2, [3, "foo", { a: 1, b: 2 }]], "bar"]];
const filtered = filter(arr, (e) => typeof e === "string")
console.log(JSON.stringify(filtered))