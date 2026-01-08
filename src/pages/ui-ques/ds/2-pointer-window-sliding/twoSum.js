function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i)
  }


  for (let i = 0; i < arr.length; i++) {
    // ! target - arr[i] ======> not arr[i] - target
    //  edge case i !== map.get(target-arr[i])
    if (map.has(target - arr[i]) && i !== map.get(target - arr[i])) {
      return [i, map.get(target - arr[i])]
    }
  }
}

console.log(twoSum([7, 2, 12, 16], 14))

/* 
7 - 0
2 - 1
12 - 2
16 - 3

*/