const myFlatObj2 = (obj, res = {}) => {

  for (let key in obj) {
    const currVal = obj[key];
    if (currVal && typeof currVal === "object") {
      myFlatObj2(currVal, res)
    } else {
      res[key] = currVal
    }
  }
  return res
}

const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3
  },
  e: {
    f: {
      g: 4,
      h: null,
      i: undefined
    }
  }
}


console.log(myFlatObj2(obj))
/* 

{
  a: 1,
  c: 2,
  d: 3,
  g: 4,
  h: null,
  i: undefined
}

*/