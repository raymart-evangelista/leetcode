const maxArea = (height) => {
  let maxWater = 0
  let l = 0
  let r = height.length - 1
  while (l < r) {
    let currArea = (r - l) * Math.min(height[l], height[r])
    if (currArea > maxWater) {
      maxWater = currArea
    }
    if (height[l] > height[r]) {
      r--
    } else {
      l++
    }
  }
  return maxWater
}

height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

maxArea(height)
