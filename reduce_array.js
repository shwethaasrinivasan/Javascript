// var reduce = function(nums, fn, init) {

//     const reducedArr = [];
//     for (let i = 0; i < arr.length; i++) {
        
//     }
//     return reducedArr;
    
// };


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};


const nums1 = [1, 2, 3, 4];
const sum = (accum, curr) => accum + curr;
console.log(reduce(nums1, sum, 0)); // Output: 10

const nums2 = [1, 2, 3, 4];
const squareSum = (accum, curr) => accum + curr * curr;
console.log(reduce(nums2, squareSum, 100)); // Output: 130

const nums3 = [];
const zeroSum = (accum, curr) => 0;
console.log(reduce(nums3, zeroSum, 25)); // Output: 25
