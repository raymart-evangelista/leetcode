/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // convert all uppercase letters into lowercase letters
  let lowercased = s.toLowerCase()
  // remove all non-alphanumeric characters (everything that aren't letters and numbers)
  let alphanumeric = lowercased.replace(/\W/g, '')

  console.log(alphanumeric)
  // meat of the program to check if palindrome
  console.log(alphanumeric.length)
  let half = parseInt(alphanumeric.length / 2) 
  console.log(half)
  console.log(alphanumeric[half])
  // for loop that uses the half length of the string
  // pointer that points to start of array, pointer that points to end of array 
  // if at any point the two pointers don't match, return false
  // return true if we make it to the very middle of the string
};

let s1 = "A man, a plan, a canal: Panama" // true
let s2 = "race a car" // false
let s3 = " " // true

isPalindrome(s1)