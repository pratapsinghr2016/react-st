/* 

normal debounce:
================
0ms   → ❌ Execute immediately (callNow is true)
100ms → ❌ Ignored (timeout exists)
200ms → ❌ Ignored (timeout exists)
300ms → ❌ Ignored (timeout exists)
400ms → ❌ Ignored (timeout exists)
500ms → Timer expires, timeout becomes null
600ms → ✅ Execute immediately (callNow is true again)

immediate debounce
==================
0ms   → ✅ Execute immediately (callNow is true)
100ms → ❌ Ignored (timeout exists)
200ms → ❌ Ignored (timeout exists)
300ms → ❌ Ignored (timeout exists)
400ms → ❌ Ignored (timeout exists)
500ms → Timer expires, timeout becomes null
600ms → ✅ Execute immediately (callNow is true again)

*/

const input = document.querySelector("#input-id")


function debounceWithFlag(func, delay = 500, option) {
  const { leading = false, trailing = true } = option

  let timerId = null

  return function (...args) {

    const callNow = leading && !timerId
    clearTimeout(timerId)

    timerId = setTimeout(() => {

      timerId = null; // 

      if (trailing) {
        func.apply(this, [...args])
      }
    }, delay)

    if (callNow) {
      func.apply(this, [...args])
    }
  }
}

const debouncedFn = debounceWithFlag((e) => {
  const value = e.target.value
  console.log("value", value)
}, 5000, { leading: true, trailing: false });

input.addEventListener("input", debouncedFn)