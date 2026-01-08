window.timerIds = []

const originalSetTimeout = window.setTimeout;

window.setTimeout = function (cb, delay) {
  const id = originalSetTimeout(cb, delay)
  window.timerIds.push(id)
}

window.clearAllTimeouts = function () {
  for (let timerId of window.timerIds) {
    window.clearTimeout(timerId)
  }
}


setTimeout(() => {
  console.log("timer-1")
}, 1000)


setTimeout(() => {
  console.log("timer-2")
}, 2000)


setTimeout(() => {
  console.log("timer-4")
}, 5000)


setTimeout(() => {
  window.clearAllTimeouts()
}, 4000)