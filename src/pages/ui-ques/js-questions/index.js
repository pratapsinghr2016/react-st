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