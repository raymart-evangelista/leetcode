// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     let output = []
//     if (nums == null || nums.length < 3) {
//         return output
//     }

//     // sort array
//     nums.sort((a,b) => a - b)
//     let firstPointer

//     let hashedOutput = new Map()

//     for (let i=0; i<nums.length - 2; i++) {
//         firstPointer = nums[i]
//         let secondPointer = nums[i + 1]
//         let thirdPointer = nums[nums.length - 1]
//         let secondPointerIndex = i + 1
//         let thirdPointerIndex = nums.length - 1
//         while (secondPointerIndex < thirdPointerIndex) {
//             let sum = secondPointer + thirdPointer
//             if (sum == -firstPointer) {
//                 const key = [firstPointer, secondPointer, thirdPointer]
//                 hashedOutput.set(JSON.stringify(key), true)
//                 secondPointerIndex++
//                 secondPointer = nums[secondPointerIndex]
//             } else if (sum > -firstPointer) {
//                 thirdPointerIndex--
//                 thirdPointer = nums[thirdPointerIndex]
//             } else {
//                 secondPointerIndex++
//                 secondPointer = nums[secondPointerIndex]
//             }
//         }
//     }
//     output = Array.from(hashedOutput.keys(), JSON.parse)
//     return output

// };

let threeSum = (numbers) => {
  // sort array first and get rid of dupes
  let nums = numbers.sort((a, b) => a - b)
  let output = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if (sum == 0) {
        output.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] == nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] == nums[r - 1]) {
          r--
        }
        // the two lines below me is needed because
        // the sum is already at 0, if we keep our l going left and
        // the sum is still 0, that means the triple is already in
        // the array. same goes for if the r keeps going right and
        // the sum is 0
        l++
        r--
      } else if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      }
    }
  }

  return output
}

// let nums = [-1, 0, 1, 2, -1, -4]
let nums = [0, 0, 0, 0]
// let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]

// let nums = [0, 0, 0]

console.log(threeSum(nums))
