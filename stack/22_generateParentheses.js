var generateParenthesis = function (n) {
  let stack = []
  let result = []

  var generation = function (openN, closedN) {
    if (openN == n && closedN == n) {
      return result.push(stack.join(''))
    }

    if (openN < n) {
      stack.push('(')
      generation(openN + 1, closedN)
      stack.pop()
    }
    if (closedN < openN) {
      stack.push(')')
      generation(openN, closedN + 1)
      stack.pop()
    }
  }

  generation(0, 0)
  return result
}

generateParenthesis(3)
