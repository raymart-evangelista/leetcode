/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = []
  let result = new Array(temperatures.length).fill(0)

  for (let i = 0; i < temperatures.length; i++) {
    let currTemp = temperatures[i]

    while (stack.length > 0 && currTemp > stack[stack.length - 1].temp) {
      let { index } = stack.pop()
      result[index] = i - index
    }

    stack.push({ temp: currTemp, index: i })
  }

  return result
}

temps = [73, 74, 75, 71, 69, 72, 76, 73]
dailyTemperatures(temps)

// return answer should be how many days it took to get
// a hotter than than temps[i]
// answer = [1, 1, 4, 2, 0, 1, 0, 0]
