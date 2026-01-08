function debounceWithCancelFlush(fn, delay) {
  let savedThis = null;
  let savedArgs = [];
  let timerId = null;

  const debounced = function (...args) {
    savedArgs = args;
    savedThis = this;

    clearTimeout(timerId);
    timerId = setTimeout(() => {

      timerId = null;
      fn.call(savedThis, ...savedArgs)

    }, delay)
  }

  debounced.cancel = function () {
    clearTimeout(timerId);
    timerId = null;
  }

  debounced.flush = function () {
    fn.call(savedThis, ...savedArgs)
    clearTimeout(timerId);
    timerId = null;
  }


  return debounced

}


function log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

const debouncedLog = debounceWithCancelFlush(log, 1000);

debouncedLog('Hello');
debouncedLog('World');

// Cancel before delay completes
setTimeout(() => {
  // debouncedLog.cancel();
  console.log('Cancelled!');
}, 500);

// Output:
// Cancelled!
// (nothing else - the debounced call was cancelled)

debouncedLog('Immediate execution needed');

// Flush immediately instead of waiting
setTimeout(() => {
  console.log('Flushing now...');
  debouncedLog.flush();
}, 200);

// Output (at 200ms, not 1000ms):
// Flushing now...
// [timestamp] Immediate execution needed