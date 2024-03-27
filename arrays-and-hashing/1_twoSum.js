let nums = [2, 7, 11, 15]
let target = 9

// let nums = [3, 2, 4],
// target = 6

// let nums = [3, 3],
//   target = 6

const twoSum = (nums, target) => {
  // brute force method
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] == target) {
  //       return [i, j]
  //     }
  //   }
  // }

  // key => number, value = index of num
  let hash = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      // add another index to array
      let currentArr = hash.get(nums[i])
      currentArr.push(i)
      hash.set(nums[i], currentArr)
    } else {
      let newArr = [i]
      hash.set(nums[i], newArr)
    }
  }

  console.log(hash)

  //  target - nums[i] = another num
  // if that other num exists, we can return both i, and the index of the other num
  // if the other num doesn't exist, we can iterate i to the next num in the arr
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i]
    let numToFind = target - currentNum
    if (hash.has(numToFind)) {
      let arrWithNum = hash.get(numToFind)
      if (arrWithNum.length > 1) {
        return arrWithNum
      } else if (i !== arrWithNum[0]) {
        arrWithNum.push(i)
        return arrWithNum
      } else {
      }
    }
  }
}

console.log(twoSum(nums, target))
// twoSum(nums, target)
