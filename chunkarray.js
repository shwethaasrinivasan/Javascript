var chunk = function(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

// Example usage:

// Example 1:
console.log(chunk([1,2,3,4,5], 1)); // Output: [[1],[2],[3],[4],[5]]

// Example 2:
console.log(chunk([1,9,6,3,2], 3)); // Output: [[1,9,6],[3,2]]

// Example 3:
console.log(chunk([8,5,3,2,6], 6)); // Output: [[8,5,3,2,6]]

// Example 4:
console.log(chunk([], 1)); // Output: []
