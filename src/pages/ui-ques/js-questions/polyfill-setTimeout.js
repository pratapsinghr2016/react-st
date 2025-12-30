const idMap = {};

window.mySetTimeout = function (callback, delay = 0, ...args) {
  const startTime = Date.now();
  const id = Math.random();

  function poll() {

    if (Date.now() - startTime >= delay) {
      callback(...args);

    } else {
      idMap[id] = requestAnimationFrame(poll);

    }
  }

  idMap[id] = requestAnimationFrame(poll);

  return id;
};

window.mySetTimeout(() => {
  console.log("hit")
}, 1000)

window.myClearTimeout = function (id) {
  if (idMap[id]) {
    cancelAnimationFrame(idMap[id])
    delete idMap[id]
  }
};