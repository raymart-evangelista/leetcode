/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // return two indices of two numbers, index1 and index2
  let firstPointerIndex = 0
  let firstPointer = numbers[firstPointerIndex]
  let secondPointerIndex = 1
  let secondPointer = numbers[secondPointerIndex]

  // output is index for firstPointer and secondPointer
  while (firstPointer + secondPointer != target && secondPointerIndex < numbers.length - 1) {
    secondPointerIndex += 1
    secondPointer = numbers[secondPointerIndex]
  }
  while (firstPointer + secondPointer != target && firstPointerIndex < secondPointerIndex) {
    firstPointerIndex += 1
    firstPointer = numbers[firstPointerIndex]
  }
  return [firstPointerIndex + 1, secondPointerIndex + 1]
};

let numbers = [2,7,11,15]
let target = 9
let answer = twoSum(numbers, target)

let numbers2 = [2,3,4]
let target2 = 6
let answer2 = twoSum(numbers2, target2)

let numbers3 = [-1,0]
let target3 = -1
let answer3 = twoSum(numbers3, target3)

console.log(answer3)