function digitalClock() {
  const hourEl = document.querySelector("#hour");
  const minEl = document.querySelector("#min");
  const secEl = document.querySelector("#sec");


  setInterval(() => {
    const timeNow = new Date();
    const currentHr = timeNow.getHours();
    const currMin = timeNow.getMinutes();
    const currSec = timeNow.getSeconds()
    hourEl.innerHTML = currentHr;
    minEl.innerHTML = currMin;
    secEl.innerHTML = currSec;
  }, 1000)
}

digitalClock()