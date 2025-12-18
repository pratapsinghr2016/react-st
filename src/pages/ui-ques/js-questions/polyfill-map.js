Array.prototype.myMap = function (cb, factor) {
  const arr = this;

  if (arr === null) {
    throw new Error("type error")
  }

  if (typeof cb !== "function") {
    throw new Error("Not a function")
  }

  let res = [];
  for (let i = 0; i < arr.length; i += 1) {
    const currItem = arr[i];
    console.log("THIS", currItem)
    res[i] = cb.bind(factor, currItem, i)
  }
  return res
}

// const response = [1, 2, 3, 4].myMap((item) => item * 2)
// console.log("res::", response)

// Example 4: Using thisArg
const multiplier = {
  factor: 10
};
const multiplied = [1, 2, 3, 4].myMap(function (num) {
  console.log("THIS::", this.factor)
  return num * this.factor;
}, multiplier);
// console.log(multiplied);