let isValid = (s) => {
  if (s.length < 2) {
    return false
  }
  let stack = []
  for (type of s) {
    switch (type) {
      case ')':
        if (stack.pop() !== '(') return false
        break
      case ']':
        if (stack.pop() !== '[') return false
        break
      case '}':
        if (stack.pop() !== '{') return false
        break
      default:
        stack.push(type)
        break
    }
  }
  if (stack.length > 0) {
    return false
  } else {
    return true
  }
}

// s = '()'
// s = '()[]{}'
// s = '(]'
// s = '{[]}'
s = '(('
isValid(s)
