const encode = (list) => {
  let encoded = ''
  for (let i=0; i<list.length - 1; i++) {
    encoded = list[i] + ':;'
  }
  encoded += list[list.length - 1]
  return encoded

}

const decode = (str) => {
  // precode a hashmap of all letters in the alphabet,
  // if the char in the string is not a letter, it's the char used to encode
  // so use that char(s) to split the words
}