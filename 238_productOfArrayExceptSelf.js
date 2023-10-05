/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // let hashedNums = {}
  // for (let i=0; i<nums.length; i++) {
  //   let currentNum = nums[i]
  //   hashedNums[currentNum] = true
  // }

  // return Object.values(hashedNums)
  let output = new Array(nums.length).fill(1)
  for (let i=0; i<nums.length; i++) {
    for (let j=0; j<nums.length; j++) {
      if (i != j) {
        output[i] *= nums[j]
      }
    }
  }

  return output
};

// expected output [24,12,8,6]
console.log(productExceptSelf([1,2,3,4]))