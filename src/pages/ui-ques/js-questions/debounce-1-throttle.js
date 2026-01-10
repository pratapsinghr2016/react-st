const input = document.querySelector("#input-id")

const debounce = (cb) => {
  let timerId = null;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      cb.apply(this, [...args])
    }, 1000)
  }
}

const throttle = (cb) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      cb.apply(this, [...args])
      flag = false

      setTimeout(() => {
        flag = true
      }, 1000)
    }

  }
}

const debouncedFn = debounce((e) => {
  const value = e.target.value
  console.log("value", value)
});

const throttleFn = throttle((e) => {
  const value = e.target.value
  console.log("value", value)
})

input.addEventListener("input", throttleFn)