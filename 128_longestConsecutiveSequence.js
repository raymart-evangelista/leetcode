/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // put numbers from array into a hash
  
  // create empty hash
  let hashedNums = {}
  
  // insert all array elems to hash
  // the key is going to be the element value, the hashed value will be the sequence number
  for (let i=0; i<nums.length; i++) {
    hashedNums[nums[i]] = 0
  }

  // for every elem,
  for (let i=0; i<nums.length; i++) {
    let element = nums[i]
    let elementBefore = element - 1
    // check if elem is the start point of subsequence
    // if elem is first elm, count number of elem, 
    //  in the consecutive starting with this elem
    if (hashedNums[elementBefore] == undefined) {
      hashedNums[element] = 1
      let nextElement = element + 1
        // iterate from next elem, arr[i] + 1 till last elem that can be found,
        while (hashedNums[nextElement] != undefined) {
          hashedNums[element] += 1
          nextElement += 1
        }
      }
    }
    // if count is more than previous longest subsequence found, update count

    return hashedNums
};

let arr = [100,4,200,1,3,2,]
let output = longestConsecutive(arr)