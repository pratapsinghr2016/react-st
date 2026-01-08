
const myFlatObj = (obj, parent = "", res = {}) => { //

  for (let key of Object.keys(obj)) {
    const currVal = obj[key];
    const propName = parent ? `${parent}.${key}` : key;

    if (currVal && typeof currVal === "object" && !Array.isArray(currVal)) {
      myFlatObj(currVal, propName, res) // ! with new values in param
    } else {
      res[propName] = currVal
    }
  }
  return res
}

const obj = {
  a: 12,
  b: 23,
  c: {
    p: 23,
    o: {
      l: 56,
      p: 89
    },
    q: [1, 2]
  }
}

console.log(myFlatObj(obj))