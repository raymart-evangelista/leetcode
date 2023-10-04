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
    let frequency = new Array(nums.length + 1).fill(0)

    for (let num in numsFrequency) {
      let freq = numsFrequency[num]
      if (!frequency[freq]) {
        frequency[freq] = []
      }
      frequency[freq].push(num)
    }

    console.log(frequency)

    let topKFrequent = []
    let kCounter = 0
    for (let i=frequency.length - 1; i>0; i--) {
      if (frequency[i] == 0) {
        continue
      }
      if (kCounter == k) {
        return topKFrequent
      }
      topKFrequent.push(parseInt(frequency[i]))
      kCounter++
      
    }
    // sorting the keys by 
};

console.log(topKFrequent([1,1,1,2,2,3,3,3,3,4,4], 2))