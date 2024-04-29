var MinStack = function () {
  this.stack = []
  // this.minStack = []
  return
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  // val = Math.min(
  //   val,
  //   this.minStack.length ? this.minStack[this.minStack.length - 1] : val
  // )
  // this.minStack.push()
  return
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let i = this.stack.length - 1
  while (this.stack[i] === null) {
    i--
  }
  return this.stack[i]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = this.stack[0]
  let minIndex = 0
  for (const key in this.stack) {
    if (Object.hasOwnProperty.call(this.stack, key)) {
      const number = this.stack[key]
      if (number < min) {
        min = number
        minIndex = key
      }
    }
  }
  // this.stack[minIndex] = null
  return min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-1)
console.log(minStack.getMin())
console.log(minStack)
console.log(minStack.top())
console.log(minStack.pop())
console.log(minStack)
console.log(minStack.getMin())
