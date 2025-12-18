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

const deepFreezeObj = (obj) => {

  for (let key in obj) {
    // check property is of object only or Object.keys can be another approach
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const val = obj[key];
      if (val && typeof val === "object") {
        deepFreezeObj(val)
      }
    }
  }

  return Object.freeze(obj)
}

console.log(deepFreezeObj(obj))