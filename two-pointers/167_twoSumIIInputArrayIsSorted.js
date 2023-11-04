/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // return two indices of two numbers, index1 and index2
  let firstPointerIndex = 0
  let firstPointer = numbers[firstPointerIndex]
  let secondPointerIndex = numbers.length - 1
  let secondPointer = numbers[secondPointerIndex]

  while (firstPointer + secondPointer != target) {
    if (firstPointer + secondPointer < target) {
      firstPointerIndex += 1
      firstPointer = numbers[firstPointerIndex]
    }
    if (firstPointer + secondPointer > target) {
      secondPointerIndex -= 1
      secondPointer = numbers[secondPointerIndex]
    }
  }
  return [firstPointerIndex + 1, secondPointerIndex + 1]
};

// let numbers = [2,7,11,15]
// let target = 9
// let answer = twoSum(numbers, target)

// let numbers2 = [2,3,4]
// let target2 = 6
// let answer2 = twoSum(numbers2, target2)

// let numbers3 = [-1,0]
// let target3 = -1
// let answer3 = twoSum(numbers3, target3)

// let numbers4 = [3,24,50,79,88,150,345]
let numbers4 = [12,13,23,28,43,44,59,60,61,68,70,86,88,92,124,125,136,168,173,173,180,199,212,221,227,230,277,282,306,314,316,321,325,328,336,337,363,365,368,370,370,371,375,384,387,394,400,404,414,422,422,427,430,435,457,493,506,527,531,538,541,546,568,583,585,587,650,652,677,691,730,737,740,751,755,764,778,783,785,789,794,803,809,815,847,858,863,863,874,887,896,916,920,926,927,930,933,957,981,997]
let target4 = 542
let answer4 = twoSum(numbers4, target4)

console.log(answer4)