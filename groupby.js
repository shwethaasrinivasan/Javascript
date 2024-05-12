Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        const key = fn(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
};

// Example usage:

// Example 1:
const array1 = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
];
console.log(array1.groupBy(function (item) { return item.id; }));
// Output: { "1": [{"id": "1"}, {"id": "1"}], "2": [{"id": "2"}] }

// Example 2:
const array2 = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
];
console.log(array2.groupBy(function (list) { return String(list[0]); }));
// Output: { "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] }

// Example 3:
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array3.groupBy(function (n) { return String(n > 5); }));
// Output: { "true": [6, 7, 8, 9, 10], "false": [1, 2, 3, 4, 5] }
