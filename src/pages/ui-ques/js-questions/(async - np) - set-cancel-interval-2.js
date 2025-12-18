
function createResumableInterval(cb, delay, ...args) {
  let timerId = null;
  let count = 0;
  let isStop = false;


  const start = function () {
    if (isStop) {
      console.log("timer is once stopped cant be restrarted");
      return
    };

    if (timerId !== null) return;

    cb(...args)
    timerId = setInterval(() => {
      count += 1;
      console.log(count);
      cb(...args)
    }, delay)

  }

  const pause = function () {

    clearInterval(timerId)
    timerId = null

  }

  const stop = function () {
    clearInterval(timerId)
    timerId = null
    isStop = true
  }

  return { start, stop, pause }
}

const { start, pause, stop } = createResumableInterval(() => {
  console.log("cb")
}, 1000)

setTimeout(start, 1000)
setTimeout(pause, 5000)
setTimeout(start, 6000)
setTimeout(stop, 9000)
setTimeout(start, 11000)
