const startBtn = document.querySelector("#start-counter")
const stopBtn = document.querySelector("#stop-counter")
const counterLabel = document.querySelector("#counter-label")

let counter = 0
let isStart = false
let timerId = null

startBtn.addEventListener("click", () => {
  console.log("hit")
  timerId = setInterval(() => {
    isStart = true
    if (isStart) {
      counter += 1;

      counterLabel.innerHTML = counter
    }
  }, 1000)
})

stopBtn.addEventListener("click", () => {
  isStart = false
  clearInterval(timerId)
})