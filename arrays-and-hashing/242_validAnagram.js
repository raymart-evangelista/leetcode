let s = 'anagram'
let t = 'nagaram'
let r = 'car'

// i'm not making the assumptions that the two strings are the same length

let validAnagram = (string1, string2) => {
  if (string1.length != string2.length) {
    return false
  }
  // the map will be used to store the string into char keys,
  // the value will be the amount of chars accessible
  let stringCharMap = new Map()
  for (let i = 0; i < string1.length; i++) {
    if (stringCharMap.has(string1[i])) {
      // increase count by 1
      let currentCount = stringCharMap.get(string1[i])
      let newCount = currentCount + 1
      stringCharMap.set(string1[i], newCount)
    } else {
      stringCharMap.set(string1[i], 1)
    }
  }

  console.log(stringCharMap)

  // recreate string2 with string1 letters
  for (let i = 0; i < string2.length; i++) {
    let currentChar = string2[i]
    if (stringCharMap.has(currentChar)) {
      let currentCount = stringCharMap.get(string2[i])
      if (currentCount > 0) {
        let newCount = currentCount - 1
        stringCharMap.set(string2[i], newCount)
        console.log(stringCharMap)
      } else {
        // this means that the currentCount is 0 or less.. meaning that
        // not a valid anagram
        return false
      }
    } else {
      return false
    }
  }
  return true
}

console.log(validAnagram(s, t))
// validAnagram(s, t)
