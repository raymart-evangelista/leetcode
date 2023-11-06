/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let output = []
    if (nums == null || nums.length < 3) {
        return output
    }

    // sort array
    nums.sort((a,b) => a - b)
    let firstPointer

    let hashedOutput = new Map()

    for (let i=0; i<nums.length - 2; i++) {
        firstPointer = nums[i]
        let secondPointer = nums[i + 1]
        let thirdPointer = nums[nums.length - 1]
        let secondPointerIndex = i + 1
        let thirdPointerIndex = nums.length - 1
        while (secondPointerIndex < thirdPointerIndex) {
            let sum = secondPointer + thirdPointer
            if (sum == -firstPointer) {
                const key = [firstPointer, secondPointer, thirdPointer]
                hashedOutput.set(JSON.stringify(key), true)
                secondPointerIndex++
                secondPointer = nums[secondPointerIndex]
            } else if (sum > -firstPointer) {
                thirdPointerIndex--
                thirdPointer = nums[thirdPointerIndex]
            } else {
                secondPointerIndex++
                secondPointer = nums[secondPointerIndex]
            }
        }
    }
    output = Array.from(hashedOutput.keys(), JSON.parse)
    return output
    
};

let nums = [-1,0,1, 2,-1,-4]
let nums1 = [0,1]

console.log(threeSum(nums))