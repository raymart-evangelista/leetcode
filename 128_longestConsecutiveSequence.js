/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // put numbers from array into a hash
  let hashedNums = {}
  for (let i=0; i<nums.length; i++) {
    hashedNums[nums[i]] = true
  }

  // create empty hash

  // insert all array elems to hash

  // for every elem,
    // check if elem is the start point of subsequence

    // if elem is first elm, count number of elem, 
    //  in the consecutive starting with this elem
    // iterate from next elem, arr[i] + 1 till last elem that can be found,
    // if count is more than previous longest subsequence found, update count

    
};