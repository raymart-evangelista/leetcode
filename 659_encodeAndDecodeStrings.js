const encode = (list) => {
  // when encoding, using a number followed by a special character
  let encoded = ''
  for (let i=0; i<list.length - 1; i++) {
    let charAmt = list[i].length
    let specialChar = '#'
    let prefix = charAmt + specialChar
    encoded = encoded + prefix + list[i]
  }
  return encoded

}

const decode = (str) => {
  // precode a hashmap of all letters in the alphabet,
  // if the char in the string is not a letter, it's the char used to encode
  // so use that char(s) to split the words
  let strToBeDecoded = str
  let list = []

  // base case is when the string to be decoded is empty
  if (strToBeDecoded = '') {
    return list
  }

  // use a while loop to get the amount of chars to decode as a string
  let charAmt = []
  for (let i=0; i<str.length; i++) {
    
  }
}

console.log(encode(['lintlintlintlintlintlintlintlintlint', 'code', 'love', 'you']))