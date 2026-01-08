function pickRandomElFromArr(arr, count) {

  let response = []

  for (let i = 0; response.length < count; i++) {
    const randomEl = Math.floor(Math.random() * arr.length)
    if (!response.includes(randomEl) && arr.includes(randomEl)) {
      response.push(randomEl)
    }
  }
  return response
}

console.log(pickRandomElFromArr([1, 2, 3, 4, 5], 3))

// Sample n random items from array
function sample(array, n) {
  const result = [];
  const copy = [...array];

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * copy.length);
    result.push(copy[randomIndex]);
    copy.splice(randomIndex, 1); // Remove item to avoid duplicates
  }

  return result;
}

console.log(sample([1, 2, 3, 4, 5], 3)); // [2, 5, 1]