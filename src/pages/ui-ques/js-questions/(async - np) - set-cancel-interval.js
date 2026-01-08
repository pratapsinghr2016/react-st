function setCancellableInterval(cb, delay) {
  const timerId = setInterval(cb, delay)
  return () => clearInterval(timerId)
}


let i = 0;
const cancel = setCancellableInterval(() => {
  i++
  console.log(i)
}, 10)

setTimeout(() => {
  cancel()
}, 2000)