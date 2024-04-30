/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // push each token onto the stack,
  // for the case of a valid operation, take out the two previous numbers
  // then push the expression onto the stack`
  let stack = []
  for (const token of tokens) {
    let a = null
    let b = null
    switch (token) {
      case '+':
        b = stack.pop()
        a = stack.pop()
        stack.push(a + b)
        break
      case '-':
        b = stack.pop()
        a = stack.pop()
        stack.push(b - a)
        break
      case '*':
        b = stack.pop()
        a = stack.pop()
        stack.push(b * a)
        break
      case '/':
        b = stack.pop()
        a = stack.pop()
        stack.push(Math.trunc(a / b))
        break
      default:
        stack.push(parseInt(token))
        break
    }
  }
  console.log(stack)
  return stack.pop()
}

// tokens = ['2', '1', '+', '3', '*']
// tokens = ['4', '13', '5', '/', '+']
tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
evalRPN(tokens)
