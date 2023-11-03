const encode = (list) => {
  // when encoding, using a number followed by a special character
  let encoded = ''
  for (let i=0; i<list.length; i++) {
    encoded += `${list[i].length}#${list[i]}`
  }
  return encoded

}

const decode = (str) => {
  // console.log(str)
  // precode a hashmap of all letters in the alphabet,
  // if the char in the string is not a letter, it's the char used to encode
  // so use that char(s) to split the words
  let list = []

  // store into array 
  let stringLength = undefined
  let currentString = undefined
  let stringCounter = undefined
  for (let i=0; i<str.length; i++) {
    // if the current char is not a hashtag and we aren't 
    // currently visitng a char that is part of a string
    // then it's a char that will be part of the number we encoded
    let currentChar = str[i]
    if (currentChar != '#' && stringLength == undefined && stringCounter == undefined) {
      stringLength = currentChar
    } else if (currentChar != '#' && stringLength && stringCounter == undefined) {
      stringLength += currentChar
    } else if  (currentChar == '#' && stringCounter == undefined) {
      // console.log(stringLength)
      stringCounter = parseInt(stringLength)
      stringLength = undefined
    } else {
      if (currentString == undefined) {
        currentString = currentChar
      } else {
        currentString += currentChar
      }
      stringCounter -= 1
      if (stringCounter == 0) {
        list.push(currentString)
        currentString = undefined
        stringCounter = undefined
      }
    }
  }
  return list
}

// let thingToEncode = ['lintlintlintlintlintlintlintlintlint', 'code', 'love', 'you']
// let thingToEncode2 = ["lint","code","love","you"]
// console.log(decode(encode(thingToEncode2)))