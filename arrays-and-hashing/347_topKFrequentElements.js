/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numsFrequency = {}
    for (let i=0; i<nums.length; i++) {
      let currentNum = nums[i]
      if (!numsFrequency[currentNum]) {
        numsFrequency[currentNum] = 0
      }
      numsFrequency[currentNum] += 1
    }

    // creating an array to hold an array of the nums with the frequency as the indices
    let frequency = new Array(nums.length + 1)

    for (let num in numsFrequency) {
      let freq = numsFrequency[num]
      if (!frequency[freq]) {
        frequency[freq] = []
      }
      frequency[freq].push(parseInt(num))
    }

    console.log(frequency)

    let topKFrequent = []
    for (let i=frequency.length - 1; i>=0 && topKFrequent.length < k; i--) {
      if (frequency[i]) {
        topKFrequent.push(...frequency[i])
      }
      
    }
    // sorting the keys by 
    return topKFrequent
};

// console.log(topKFrequent([1,1,1,2,2,3,3,3,3,4,4], 2))
// console.log(topKFrequent([1], 1))
// console.log(topKFrequent([3,3,4,4], 2))
console.log(topKFrequent([3,0,1,0], 1))