/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // hashmap used to map all numbers
    let positives = new Map()
    for (n of nums) {
        if (n > 0) {
            positives.set(n, true)
        }
    }

    console.log(positives)

    let smallestPosInt = undefined
    let counter = 1
    while (smallestPosInt === undefined) {
        if (positives.get(counter)) {
            counter++
        } else {
            smallestPosInt = counter
        }
    }

    return smallestPosInt
};

console.log(firstMissingPositive([1,2,0]))