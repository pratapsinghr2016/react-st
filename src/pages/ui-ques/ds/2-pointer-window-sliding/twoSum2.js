function twoSum2(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum > target) {
      right--
    } else if (sum < target) {
      left++
    } else if (sum === target) {

      return [left + 1, right + 1]
    }
  }


}

console.log(twoSum2([0, 2, 7, 11, 15], 9))