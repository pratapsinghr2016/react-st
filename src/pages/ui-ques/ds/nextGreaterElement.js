

const nextGreaterElement = (nums1, nums2) => {
  const stack = [];
  const nextGreaterMap = {}

  for (let i = nums2.length - 1; i >= 0; i--) {
    const currentElement = nums2[i];

    while (stack.length && stack[stack.length - 1] <= currentElement)
      stack.pop()

    nextGreaterMap[currentElement] = stack.length === 0 ? -1 : stack[stack.length - 1]

    stack.push(currentElement)

  }

  return nums1.map((item) => nextGreaterMap[item])

}

const nums1 = [4, 1, 2]
const nums2 = [1, 3, 4, 2]
const response = nextGreaterElement(nums1, nums2)
console.log("response::", response)

const nextGreaterElement2 = (nums1, nums2) => {
  const nums2Map = {};
  const response = []
  nums2.forEach((item, index) => {
    nums2Map[item] = index
  })

  for (let i = 0; i < nums1.length; i++) {
    const currentNums1Item = nums1[i];
    const startIdx = nums2Map[currentNums1Item];
    let nextGrtr = -1
    for (let j = startIdx + 1; j < nums2.length; j++) {
      if (currentNums1Item < nums2[j]) {
        nextGrtr = nums2[j]
        break;
      }
    }
    response.push(nextGrtr)
  }
  return response
}

const response2 = nextGreaterElement2(nums1, nums2)
console.log("response::", response2)