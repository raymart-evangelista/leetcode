const trap = (height) => {
  let lMax = 0
  let rMax = 0
  let l = 0
  let r = height.length - 1
  let waterTrapped = 0
  while (l < r) {
    if (height[l] < height[r]) {
      if (height[l] < lMax) {
        // we can store water since it wont overflow to left
        waterTrapped += lMax - height[l]
      } else {
        // cant store water because it will overflow to left
        lMax = height[l]
      }
      l++
    } else {
      if (height[r] < rMax) {
        // can store water
        waterTrapped += rMax - height[r]
      } else {
        rMax = height[r]
      }
      r--
    }
  }
  return waterTrapped
}

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
trap(height)
