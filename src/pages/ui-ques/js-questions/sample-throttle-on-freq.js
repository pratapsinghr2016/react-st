function sampler(msgFn, freq) {
  let count = 0;

  return function (...args) {
    count += 1;
    if (count === freq) {
      msgFn.apply(this, args)
      count = 0
    }
  }

}


function message() {
  console.log("hello")
}

const sample = sampler(message, 4)
sample()
sample()
sample()
sample()
sample()
sample()
sample()
sample()