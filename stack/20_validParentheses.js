let isValid = (s) => {
  let stack = []
  let closingType = null
  for (type of s) {
    if (closingType && closingType !== type) {
      return false
    } else if (closingType === type) {
      stack.pop()
      closingType = null
    } else {
      stack.push(type)
      switch (type) {
        case '(':
          closingType = ')'
          break
        case '[':
          closingType = ']'
          break
        default:
          closingType = '}'
          break
      }
    }
  }

  return true
}

// s = '()'
// s = '()[]{}'
// s = '(]'
s = '{[]}'
isValid(s)
