let calPoints = (operations) => {
  let stack = []
  for (op of operations) {
    switch (op) {
      case '+':
        // add two previous items
        stack.push(stack.at(-1) + stack.at(-2))
        break
      case 'D':
        // double score of previous score
        stack.push(stack.at(-1) * 2)
        break
      case 'C':
        // remove previous score
        stack.pop()
        break
      default:
        // add score
        stack.push(parseInt(op))
        break
    }
  }

  if (stack.length == 0) return 0
  return stack.reduce((a, b) => a + b)
}

ops = ['5', '2', 'C', 'D', '+']
calPoints(ops)
