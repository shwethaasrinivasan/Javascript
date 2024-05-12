var isEmpty = function(obj) {
    // Check if obj is an array or an object and return true if it's empty
    return Array.isArray(obj) ? obj.length === 0 : Object.keys(obj).length === 0;
};

// Example usage:

// Example 1:
console.log(isEmpty({"x": 5, "y": 42})); // Output: false

// Example 2:
console.log(isEmpty({})); // Output: true

// Example 3:
console.log(isEmpty([null, false, 0])); // Output: false
