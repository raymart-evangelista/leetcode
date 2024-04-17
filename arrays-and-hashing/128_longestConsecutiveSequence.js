/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//   if (nums.length == 0) {
//     return 0
//   } else if (nums.length == 1) {
//     return 1
//   }

//   // create empty hash
//   let hashedNums = {}

//   // insert all array elements to hash
//   // the key is going to be the element value, the hashed value will be the sequence number
//   for (let i=0; i<nums.length; i++) {
//     hashedNums[nums[i]] = 0
//   }

//   // for every elem,
//   let highestCount = 1
//   for (let i=0; i<nums.length; i++) {
//     let element = nums[i]
//     let elementBefore = element - 1
//     // check if elem is the start point of subsequence
//     // if elem is first elm, count number of elem,
//     //  in the consecutive starting with this elem
//     if (hashedNums[elementBefore] == undefined) {
//       let counter = 1
//       let nextElement = element + 1
//         // iterate from next elem, arr[i] + 1 till last elem that can be found,
//         while (hashedNums[nextElement] != undefined) {
//           counter += 1
//           nextElement += 1
//           // if count is more than previous longest subsequence found, update count
//           if (counter > highestCount) {
//             highestCount =  counter
//           }
//         }
//       }
//     }

//     return highestCount
// };

/*
const longestConsecutive = (nums) => {
  let map = new Map()
  for (let num of nums) {
    // create hashmap where key is the number. the value will be true if left neighbor exists and else otherwise
    if (map.has(num - 1)) {
      map.set(num, true)
    } else {
      map.set(num, false)
    }
    if (map.has(num + 1)) {
      map.set(num + 1, true)
    }
  }

  // go thru array again to find longest consecutive sequence
  let longestConsecutive = 0
  for (let num of nums) {
    let currentConsecutive = 0
    if (map.get(num) === false) {
      currentConsecutive += 1
      let counter = 1
      while (map.has(num + counter)) {
        currentConsecutive += 1
        counter += 1
      }
    }
    if (currentConsecutive > longestConsecutive) {
      longestConsecutive = currentConsecutive
    }
  }
  return longestConsecutive
}
*/

const longestConsecutive = (nums) => {
  let set = new Set(nums)
  let longest = 0
  for (let num of set) {
    if (!set.has(num - 1)) {
      let currLongest = 1
      while (set.has(num + currLongest)) {
        currLongest += 1
      }
      if (currLongest > longest) {
        longest = currLongest
      }
    }
  }
  return longest
}

let nums = [100, 4, 200, 1, 3, 2]
// let arr2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
let output = longestConsecutive(nums)
console.log(output)
