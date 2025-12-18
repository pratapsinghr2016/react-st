const idMap = {}


window.mySetInterval = function (cb, delay) {
  let start = Date.now();
  const id = Math.random()
  const poll = () => {


    if (Date.now() - start >= delay) {
      cb()
      start = Date.now()
    }
    idMap[id] = requestAnimationFrame(poll)

  }

  idMap[id] = requestAnimationFrame(poll)
  return id
}

const id1 = window.mySetInterval(() => {
  console.log("hit")
}, 1000)

const id2 = window.mySetInterval(() => {
  console.log("hit-2")
}, 1000)

window.myClearInterval = function (id) {
  if (idMap[id]) {
    cancelAnimationFrame(idMap[id])
    delete idMap[id]
  }
}

setTimeout(() => {
  window.myClearInterval(id1);
  console.log("Cleared id1");
}, 9000);