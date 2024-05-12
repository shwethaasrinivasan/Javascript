var flat = function(arr, n) {
    function flatten(currentArray, currentDepth) {
        // If current depth is not less than n, return current array
        if (currentDepth >= n) return currentArray;
        
        let result = [];
        for (let i = 0; i < currentArray.length; i++) {
            if (Array.isArray(currentArray[i])) {
                // Recursively flatten the array
                result = result.concat(flatten(currentArray[i], currentDepth + 1));
            } else {
                result.push(currentArray[i]);
            }
        }
        return result;
    }
    
    return flatten(arr, 0);
};

// Example usage:

// Example 1:
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));
// Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// Example 2:
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// Example 3:
console.log(flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
