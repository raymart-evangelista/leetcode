// const twoSum = (numbers, target) => {
//   for (let currIndex = 0; currIndex < numbers.length; currIndex++) {
//     let leftPointer = currIndex + 1
//     let rightPointer = numbers.length - 1
//     while (leftPointer <= rightPointer) {
//       let midPointer = Math.floor((leftPointer + rightPointer) / 2)

//       if (numbers[currIndex] + numbers[midPointer] == target) {
//         return [currIndex + 1, midPointer + 1]
//       }

//       if (numbers[currIndex] + numbers[midPointer] < target) {
//         leftPointer = midPointer + 1
//       } else {
//         // if (numbers[currIndex] + numbers[midPointer] > target)
//         rightPointer = midPointer - 1
//       }
//     }
//   }
// }

const twoSum = (numbers, target) => {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    let sum = numbers[left] + numbers[right]
    if (sum == target) return [left + 1, right + 1]
    if (sum < target) {
      left++
    } else {
      right--
    }
  }
}

// let numbers = [2, 7, 11, 15]
// let numbers = [5, 25, 75]
let numbers = [1, 2, 3, 4, 4, 9, 56, 90]

let target = 8

console.log(twoSum(numbers, target))
