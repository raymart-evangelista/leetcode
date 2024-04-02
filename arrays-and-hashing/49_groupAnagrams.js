// const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
// const groupAnagrams = (strs) => {
//   let map = new Map()
//   for (let i = 0; i < strs.length; i++) {
//     // normalize the current string
//     let currStr = strs[i]
//     let norm = currStr.split('').sort().join('')

//     if (map.has(norm)) {
//       let currentArr = map.get(norm)
//       currentArr.push(currStr)
//       map.set(norm, currentArr)
//     } else {
//       let newArr = Array(currStr)
//       map.set(norm, newArr)
//     }
//   }

//   let returnArr = Array()
//   map.forEach((value, key) => {
//     returnArr.push(value)
//   })
//   return returnArr
// }

// // console.log(groupAnagrams(strs))

// let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
// let strs = ['a']

let groupAnagrams = (strs) => {
  let map = new Map()

  for (let i = 0; i < strs.length; i++) {
    let currStr = strs[i]
    let normStr = currStr.split('').sort().join('')
    // ['e','a','t'] -> ['a','e','t'] -> 'aet' normalized string
    if (map.has(normStr)) {
      let currArr = map.get(normStr)
      currArr.push(currStr)
      map.set(normStr, currArr)
    } else {
      map.set(normStr, [currStr])
    }
  }

  let returnArr = new Array()
  map.forEach((value) => {
    returnArr.push(value)
  })

  return returnArr
}

// n = length of strs arr
// m = length of str
// O(n*m)

console.log(groupAnagrams(strs))
