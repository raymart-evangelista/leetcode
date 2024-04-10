// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
//   let output = []
//   for (let i=0; i<nums.length; i++) {
//     if (output[i-1] != undefined) {
//       output[i] = output[i-1] * nums[i-1]
//     } else {
//       output[i] = 1
//     }
//   }

//   let post = 1
//   for (let i=nums.length-1; i>= 0; i--) {
//     if (output[i+1] != undefined) {
//       post = post * nums[i+1]
//       output[i] = output[i] * post
//     } else {
//       output[i] = output[i] * post
//     }
//   }

//   return output
// };

// // expected output [24,12,8,6]
// console.log(productExceptSelf([1,2,3,4]))

nums = [1, 2, 3, 4]
// nums = [-1, 1, 0, -3, 3]

const productExceptSelf = (nums) => {
  let pre = 1
  let post = 1
  let output = []

  // [1,1,2,6]
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      output[i] = pre
    } else {
      output[i] = pre * nums[i - 1]
      pre = pre * nums[i - 1]
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * post
    post = post * nums[i]
  }
  console.log(output)
  return output
}

productExceptSelf(nums)
