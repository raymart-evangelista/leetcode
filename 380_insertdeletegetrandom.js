var RandomizedSet = function() {
    this.hash = new Map()
    this.arr = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.hash.has(val)) {
        return false
    } else {
        this.arr.push(val)
        this.hash.set(val, this.arr.length - 1)
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.hash.has(val)) {
        // remove value from array then remap hashmap
            // swap val to last element in arr
            let indexToRemove = this.hash.get(val)
            this.arr[indexToRemove] = this.arr[this.arr.length - 1]
            // pop last element
            this.arr.pop()
            this.hash.delete(val)
            // remap hashamp
            this.hash.set(this.arr[indexToRemove], indexToRemove)
        return true
    } else {
        return false
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    min = Math.ceil(0)
    max = Math.floor(this.arr.length - 1)
    let randIndex = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(this.arr)
    return this.arr[randIndex]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet()
console.log(obj.insert(0))
console.log(obj.insert(33))
console.log(obj.hash)
console.log(obj.arr)
console.log(obj.remove(0))
console.log(obj.hash)
console.log(obj.arr)
console.log(obj.insert(2))
console.log(obj.remove(33))
console.log(obj.getRandom())
