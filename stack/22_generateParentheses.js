var generateParenthesis = function (n) {
  let stack = []
  let result = []

  var generation = (openN, closedN) => {
    if (openN == closedN && openN == n) {
      result.push(stack.join(''))
      return
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

console.log(generateParenthesis(4))
