
const pipe = (obj) => {

  return (...args) => {

    let result = {};
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.lgth; i++) {
      const currItem = obj[i];

      if (currItem && typeof currItem === "function") {
        result[i] = currItem(...args)
        return result
      }
      return pipe(currItem)

    }

  }

}

// Input:
const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c
}

const output = pipe(obj)(1, 1, 1);
console.log(output);

/* Output:
{
  a: {
    b: 3,
      c : 1
  },
  d: -1
} */
// ====================================================
const pipe1 = (obj) => {
  let res = {}
  return (...args) => {
    for (let key in obj) {
      const currItem = obj[key];
      if (typeof currItem === "function") {
        res[key] = currItem(...args)
      } else {
        res[key] = pipe1(currItem)(...args)
      }
    }
    return res
  }
}



// Input:
const obj1 = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
    d: {
      e: (a, b, c) => a + b - c,
    }
  },
  d: (a, b, c) => a - b - c
}

const output1 = pipe1(obj1)(1, 1, 1);
console.log(output1);