function methodChaining() {
  this.result = 0;

  this.add = function (val) {
    this.result = this.result + val;
    return this
  }

  this.subtract = function (val) {
    result -= val;
    return this
  }

  this.divide = function (val) {
    result = result / val;
    return this
  }

  this.multiply = function (val) {
    result = result * val;
    return this
  }

  this.getValue = function () {
    return result
  }

  return this
}


console.log(methodChaining().add(10).divide(5).subtract(-10).getValue())