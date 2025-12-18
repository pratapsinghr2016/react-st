function computeAmount() {

  this.value = 0

  this.crore = function (amount) {
    this.value += (amount * 10000000)
    return this
  }

  this.lacs = function (amount) {
    this.value += (amount * 100000)
    return this
  }

  this.thousands = function (amount) {
    this.value += (amount * 1000)
    return this
  }

  this.result = function () {
    return this.value
  }

  return this

}

const amount = computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousands(45).crore(7).result()
console.log(amount)