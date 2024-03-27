// nums = [1,2,3,1]
// return true if any val appears at least twice in array
// return false if every elem is distinct

// brute force method
/* two for loops, inner for loop is looking for a match,
outer for loop is the num wanting to match
O(n^2)
*/

let nums = [1, 2, 3, 9, 0]

let containsDuplicatesBRUTE = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(`nums[i]: ${nums[i]} : nums[j] : ${nums[j]}`)
      if (nums[i] == nums[j]) {
        return true
      }
    }
  }
  return false
}

console.log(containsDuplicatesBRUTE(nums))

// hash map method
/*
key = number
value = true
if the key already exists, then we can return true--means that the number already
exists in the hash map
 */
let containsDuplicatesHASH = (nums) => {
  let containsDup = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (containsDup.has(nums[i])) {
      return true
    } else {
      containsDup.set(nums[i], true)
    }
  }
  return false
}

console.log(containsDuplicatesHASH(nums))
