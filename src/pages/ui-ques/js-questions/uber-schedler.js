


function schedler(arr) {
  let res = [];
  let visited = new Set()

  function resolveDependency(itemId) {
    if (visited.has(itemId))
      return
    visited.add(itemId)

    // last defense mechanisim if any valid node is missing
    const itemWithDep = arr.find((item) => item.id === itemId)
    if (!itemWithDep)
      return


    for (let itemKey of itemWithDep.dependencies) {
      resolveDependency(itemKey)
    }

    res.push(itemId)

  }

  for (let item of arr) {
    resolveDependency(item.id)
  }
  return res
}


const schedules = [
  { id: "a", dependencies: ["b", "c"] },
  { id: "b", dependencies: ["d"] },
  { id: "c", dependencies: ["e"] },
  { id: "d", dependencies: [] },
  { id: "e", dependencies: ["f"] },
  { id: "f", dependencies: [] }
]

console.log(schedler(schedules))