function flattenArr(arr, depth) {

  let response = []
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      response = [...response, ...flattenArr(item, depth - 1)]
    } else {
      response = [...response, item]
    }
  }
  return response
}

// Basic nested array
console.log(flattenArr([1, [2, 3], 4], 1));
// → [1, 2, 3, 4]

// Deeper nesting with depth = 1
console.log(flattenArr([1, [2, [3, [4]]]], 1));
// → [1, 2, [3, [4]]]

// Deeper nesting with depth = 2
console.log(flattenArr([1, [2, [3, [4]]]], 2));
// → [1, 2, 3, [4]]

// Fully flatten with high depth
console.log(flattenArr([1, [2, [3, [4]]]], Infinity));
// → [1, 2, 3, 4]

// depth = 0 (no flattening)
console.log(flattenArr([1, [2, 3], 4], 0));
// → [1, [2, 3], 4]

// Mixed types
console.log(flattenArr(['a', ['b', ['c']], { d: 1 }], 2));
// → ['a', 'b', 'c', { d: 1 }]

// Empty arrays
console.log(flattenArr([1, [], [2, []], 3], 1));
// → [1, 2, [], 3]