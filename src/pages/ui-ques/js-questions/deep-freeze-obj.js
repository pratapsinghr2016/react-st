const deepFreezeObj = (obj) => {

  for (let key of Object.keys(obj)) {

    const val = obj[key];
    if (val && typeof val === "object") {
      deepFreezeObj(val)
    }

  }

  return Object.freeze(obj)
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

console.log(deepFreezeObj(obj))