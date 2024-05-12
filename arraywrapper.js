class ArrayWrapper {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums;
    }

    /**
     * When an instance is used in a mathematical operation, JavaScript automatically calls this method.
     * @return {number}
     */
    valueOf() {
        return this.nums.reduce((sum, num) => sum + num, 0);
    }

    /**
     * When an instance is converted to a string, JavaScript automatically calls this method.
     * @return {string}
     */
    toString() {
        return `[${this.nums.join(',')}]`;
    }
}

// Example usage:

// Example 1:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2); // Output: 10

// Example 2:
const obj = new ArrayWrapper([23,98,42,70]);
console.log(String(obj)); // Output: "[23,98,42,70]"

// Example 3:
const objEmpty1 = new ArrayWrapper([]);
const objEmpty2 = new ArrayWrapper([]);
console.log(objEmpty1 + objEmpty2); // Output: 0
