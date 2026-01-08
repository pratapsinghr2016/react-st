
/* 
Note: It is recommended to have completed the Cancellable Interval 
question before attempting this question.

Implement a function createResumableInterval, that acts like 
setInterval and has the exact same signature. However instead of 
returning a timer ID, it returns an object that contains three methods:

start: Runs the callback immediately and every delay milliseconds.
pause: Pauses the interval so that it stops running. Execution can be 
resumed by calling start() again.
stop: Stops the interval permanently, cannot be restarted.

createResumableInterval(callback);
createResumableInterval(callback, delay);
createResumableInterval(callback, delay, param1);
createResumableInterval(callback, delay, param1, param2);
createResumableInterval(callback, delay, param1, param2,  … , paramN);

*/

function createResumableInterval(cb, delay, ...args) {
  let timerId = null;
  let isStop = false;


  const start = function () {
    if (isStop) {
      console.log("timer is once stopped cant be restrarted");
      return
    };

    if (timerId !== null) return;

    cb(...args)
    timerId = setInterval(() => {

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
