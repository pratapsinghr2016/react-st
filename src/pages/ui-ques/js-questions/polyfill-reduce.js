Array.prototype.myReduce = function (cb, initialVal) {
  const arr = this;

  if (arr.length === 0) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let prev = initialVal !== undefined ? initialVal : arr[0]
  const startIdx = initialVal !== undefined ? 0 : 1

  for (let index = startIdx; index < arr.length; index += 1) {
    const curr = arr[index];
    prev = cb(prev, curr)
  }
  return prev
}


const res = [1, 2, 3, 4].myReduce((prev, curr) => {

  prev.push(curr * 2)

  return prev
}, [])

console.log(res)