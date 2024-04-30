var MinStack = function () {
  this.stack = []
  this.minStack = []
  return
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  val = Math.min(
    val,
    this.minStack.length ? this.minStack[this.minStack.length - 1] : val
  )
  this.minStack.push(val)
  return
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.minStack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.length ? this.stack[this.stack.length - 1] : null
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack.length ? this.minStack[this.minStack.length - 1] : null
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */