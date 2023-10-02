/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let strsSorted = []

  // sort
  for (const s of strs) {
      let sorted = s.split("").sort().join("")
      strsSorted.push(sorted)
  }

  // add to hash
  let hashedAnagrams = {}
  for (let i=0; i<strs.length; i++) {
      if (hashedAnagrams[strsSorted[i]]) {
          hashedAnagrams[strsSorted[i]] = [
              ...hashedAnagrams[strsSorted[i]],
              strs[i]
          ]
      } else {
          hashedAnagrams[strsSorted[i]] = [strs[i]]
      }
  }

  return Object.values(hashedAnagrams)

};