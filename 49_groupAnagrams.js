// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function(strs) {
//   let strsSorted = []

//   // sort
//   for (const s of strs) {
//       let sorted = s.split("").sort().join("")
//       strsSorted.push(sorted)
//   }

//   // add to hash
//   let hashedAnagrams = {}
//   for (let i=0; i<strs.length; i++) {
//       if (hashedAnagrams[strsSorted[i]]) {
//           hashedAnagrams[strsSorted[i]] = [
//               ...hashedAnagrams[strsSorted[i]],
//               strs[i]
//           ]
//       } else {
//           hashedAnagrams[strsSorted[i]] = [strs[i]]
//       }
//   }

//   return Object.values(hashedAnagrams)

// };

function groupAnagrams(strings) {
  let groupedStrings = {}
  for (let i=0; i<strings.length; i++) {
    let sortedKey = sortString(strings[i])
    if (!groupedStrings[sortedKey]) {
      groupedStrings[sortedKey] = []
    }
    groupedStrings[sortedKey].push(strings[i])
  }
  return Object.values(groupedStrings)
}

function sortString(string) {
  return string.split("").sort().join("")
}

// console.log(sortString("eat"))

let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))