const methodChaining1 = () => {
  let result = 0;
  return {
    add(val) {
      result += val;
      return this
    },
    subtract(val) {
      result -= val;
      return this
    },
    divide(val) {
      result = result / val;
      return this
    },
    multiply(val) {
      result = result * val;
      return this
    },
    getValue() {
      return result
    }
  }
}

const methodChaining = () => {
  let result = 0;
  const obj = {
    add(val) {
      result += val;
      return obj
    },
    subtract(val) {
      result -= val;
      return obj
    },
    divide(val) {
      result = result / val;
      return obj
    },
    multiply(val) {
      result = result * val;
      return obj
    },
    getValue() {
      return result
    }
  }
  return obj
}

const calculator = methodChaining();
console.log(calculator.add(10).divide(5).subtract(-10).getValue())