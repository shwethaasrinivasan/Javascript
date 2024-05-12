var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        // Filter out falsy values and recursively compact each element
        return obj.filter(Boolean).map(compactObject);
    } else if (typeof obj === 'object' && obj !== null) {
        // Recursively compact each key-value pair in the object
        const compactedObj = {};
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const value = obj[key];
                if (Boolean(value)) {
                    compactedObj[key] = compactObject(value);
                }
            }
        }
        return compactedObj;
    }
    // Return the value if it's neither an object nor an array
    return obj;
};

// Example usage:

// Example 1:
console.log(compactObject([null, 0, false, 1])); // Output: [1]

// Example 2:
console.log(compactObject({"a": null, "b": [false, 1]})); // Output: {"b": [1]}

// Example 3:
console.log(compactObject([null, 0, 5, [0], [false, 16]])); // Output: [5, [], [16]]
