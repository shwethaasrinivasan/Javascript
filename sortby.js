var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

// Example usage:

// Example 1:
console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); // Output: [1, 2, 3, 4, 5]

// Example 2:
console.log(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], (d) => d.x)); 
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]

// Example 3:
console.log(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1]));
// Output: [[10, 1], [5, 2], [3, 4]]
