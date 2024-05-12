var join = function(arr1, arr2) {
    const map = new Map();

    // Process arr1 - add all objects to map
    arr1.forEach(obj => map.set(obj.id, {...obj}));

    // Process arr2 - merge or add objects
    arr2.forEach(obj => {
        if (map.has(obj.id)) {
            map.set(obj.id, {...map.get(obj.id), ...obj});
        } else {
            map.set(obj.id, {...obj});
        }
    });

    // Convert map values to array and sort by id
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};

// Example usage:

// Example 1:
console.log(join([
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], [
    {"id": 3, "x": 5}
]));
// Output: [{"id": 1, "x": 1}, {"id": 2, "x": 9}, {"id": 3, "x": 5}]

// Example 2:
console.log(join([
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
], [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]));
// Output: [{"id": 1, "x": 2, "y": 3}, {"id": 2, "x": 10, "y": 20}, {"id": 3, "x": 0, "y": 0}]

// Example 3:
console.log(join([
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
], [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]));
// Output: [{"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}]
