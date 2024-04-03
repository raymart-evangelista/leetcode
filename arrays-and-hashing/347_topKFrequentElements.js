// let nums = [1, 1, 1, 2, 2, 5, 5, 5, 5],
//   k = 2

let nums = [-1, -1],
  k = 1

const topKFrequent = (nums, k) => {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i]
    if (map.has(currNum)) {
      map.set(currNum, map.get(currNum) + 1)
    } else {
      map.set(currNum, 1)
    }
  }

  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1])

  let kFreqNums = new Array()
  for (let i = 0; i < k; i++) {
    kFreqNums.push(sorted[i][0])
  }

  return kFreqNums
}

topKFrequent(nums, k)
