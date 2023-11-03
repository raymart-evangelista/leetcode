/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let output = []
  for (let i=0; i<nums.length; i++) {
    if (output[i-1] != undefined) {
      output[i] = output[i-1] * nums[i-1]
    } else {
      output[i] = 1
    }
  }

  let post = 1
  for (let i=nums.length-1; i>= 0; i--) {
    if (output[i+1] != undefined) {
      post = post * nums[i+1] 
      output[i] = output[i] * post
    } else {
      output[i] = output[i] * post
    }
  }
  

  return output
};

// expected output [24,12,8,6]
console.log(productExceptSelf([1,2,3,4]))