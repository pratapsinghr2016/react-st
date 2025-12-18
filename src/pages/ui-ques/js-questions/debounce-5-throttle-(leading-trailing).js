const input = document.querySelector("#input-id")

function throttle(cb, option, delay = 2000) {
  const { leading, trailing } = option;
  let flag = true;
  let savedArgs = null;
  let savedThis = null;

  return function (...args) {

    // 1 During cooldown period
    if (!flag) {
      if (trailing) {
        savedArgs = args;
        savedThis = this
      }
      return
    }

    // 2 Leading edge execution
    if (leading) {
      cb.call(this, ...args)
    } else {
      // 2.2 If no leading, save for trailing
      savedArgs = args;
      savedThis = this
    }


    flag = false;
    setTimeout(() => {
      flag = true;

      // 3 Trailing edge execution
      if (savedArgs && trailing) {
        cb.call(savedThis, ...savedArgs);
        savedArgs = null;
        savedThis = null;

        // 4 Restart cooldown after trailing execution
        flag = false;
        setTimeout(() => {
          flag = true;
        }, delay)
      }

    }, delay)

  }
}

const onType = (e) => {
  const val = e.target.value;
  console.log(val)
}

const throttledOnType = throttle(onType, { leading: true, trailing: true })

input.addEventListener("input", throttledOnType)