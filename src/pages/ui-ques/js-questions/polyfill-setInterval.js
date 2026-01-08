const idMap = {}

window.mySetInterval = function (cb, delay, ...args) {
  let start = Date.now();
  const id = Math.random()

  const poll = () => {

    if (Date.now() - start >= delay) {
      cb(...args)
      start = Date.now()
    }
    idMap[id] = requestAnimationFrame(poll)

  }

  idMap[id] = requestAnimationFrame(poll)
  return id
}

const id2 = window.mySetInterval(() => {
  console.log("hit-2")
}, 1000)

window.myClearInterval = function (id) {
  if (idMap[id]) {
    cancelAnimationFrame(idMap[id])
    delete idMap[id]
  }
}
