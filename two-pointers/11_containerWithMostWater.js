/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // two endpoints of the iTH line are (i, 0) and (i, height[i])
    let firstPointer = 8
    let secondPointer = 7
    let firstPointerIndex = 1
    let secondPointerIndex = 8
    let gap = Math.abs(firstPointerIndex - secondPointerIndex)
    let length = 0
    if (firstPointer > secondPointer) {
      length = secondPointer
    } else {
      length = firstPointer
    }
    let area = length * gap
    return area
};

let height1 = [1,8,6,2,5,4,8,3,7]
// area = 1, move right pointer, area = 1 move left pointer, area = 6 move right pointer,
// area = 4 move right pointer, area = 15 move right pointer, area = 16 move right pointer,
// area = 45 move right pointer, area = 18 move right pointer, area = 49 END,
// move left pointer, till end -> return max area
console.log(maxArea(height1))

let height2 = [1,1]
console.log(maxArea(height2))