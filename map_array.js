// var map = function(arr, fn) {
//     return {
//        plusone(n) {
//         return n+1
//        },
//        plusI(n,i) {
//         return n+i
//        },
//        constant() {
//         return 42
//        }
// }
// }

// var map = function(arr, fn) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         console.log(result)
//         result.push(fn(arr[i], i));
//         console.log(arr)
//         console.log(arr[i])
//         console.log(i)
//         console.log(result)
//         console.log("function result",fn(arr[i], i))
//     }
//     return result;
// };

Array.prototype.map1 = function(fn){
    const result1 =  [];
    for (let i=0;i<this.length;i++){
        result1.push(fn(this[i],i))
    }
    return result1;
}
const arr1 = [1, 2, 3];
const plusone = n => n+1;
console.log(arr1.map(plusone)) // this is like a Polyfill for Map
// const arr1 = [1, 2, 3];
// const plusone = n => n + 1;
// console.log(map(arr1, plusone)); // Output: [2, 3, 4]

// const arr2 = [1, 2, 3];
// const plusI = (n, i) => n + i;
// console.log(map(arr2, plusI)); // Output: [1, 3, 5]

// const arr3 = [10, 20, 30];
// const constant = () => 42;
// console.log(map(arr3, constant)); // Output: [42, 42, 42]

// Try Array.prototype

// 1. **Initialization** (`let i = 0`):
//     - We start by initializing a variable `i` with the value `0`.
//     - This variable will serve as our loop counter.

// 2. **Condition Check** (`i < arr.length`):
//     - The loop will continue executing as long as the condition `i < arr.length` is true.
//     - `arr.length` represents the total number of elements in the array `arr`.

// 3. **Iteration Body** (`result.push(fn(arr[i], i))`):
//     - In each iteration, the following steps occur:
//         - `arr[i]`: Accesses the element at index `i` in the array `arr`.
//         - `fn(arr[i], i)`: Calls the function `fn` with two arguments:
//             - The current element (`arr[i]`).
//             - The current index (`i`).
//         - The result of `fn(arr[i], i)` is pushed into the `result` array using `result.push(...)`.
//         - The loop counter `i` is incremented by 1 (`i++`).

// 4. **Termination**:
//     - The loop continues until the condition `i < arr.length` becomes false.
//     - Once `i` reaches the value equal to or greater than `arr.length`, the loop terminates.

// In summary, this `for` loop iterates through each element of the array `arr`, applies the function `fn` to each element along with its index, and collects the results in the `result` array. 😊


// The output you've provided seems to be related to an array transformation process. Let's break down what's happening:

// 1. `(1) [2]`:
//     - This indicates an array with a single element: `2`.
//     - The `(1)` suggests that this is the first transformation step.

// 2. `array_transformation.js:22`:
//     - The line number in the JavaScript file where this transformation occurred.

// 3. `0: 2`:
//     - The element at index `0` in the array is `2`.

// 4. `length: 1`:
//     - The length of the array is `1`.

// 5. `[[Prototype]]: Array(0)`:
//     - This part is related to the prototype chain and inheritance in JavaScript. It indicates that the array inherits from the base `Array` prototype.

// 6. `2`:
//     - This is the value of the element at index `2` (after the transformation).

// 7. `array_transformation.js:23`:
//     - The next line number in the JavaScript file where the next transformation occurred.

// 8. `(1) [2]` (again):
//     - The updated array after the transformation, still containing a single element: `2`.

// 9. `array_transformation.js:18`:
//     - The line number where the next transformation occurred.

// 10. `2`:
//     - The value of the element at index `2` (after the transformation).

// 11. `array_transformation.js:20`:
//     - The line number where the next transformation occurred.

// 12. `1`:
//     - The value of the element at index `1` (after the transformation).

// 13. `array_transformation.js:21`:
//     - The line number where the next transformation occurred.

// 14. `(2) [2, 3]`:
//     - The updated array after the transformation, now containing two elements: `2` and `3`.

// 15. `array_transformation.js:22`:
//     - The line number where the next transformation occurred.

// 16. `3`:
//     - The value of the element at index `3` (after the transformation).

// 17. `array_transformation.js:23`:
//     - The line number where the next transformation occurred.

// 18. `(2) [2, 3]` (again):
//     - The final array after all transformations, still containing two elements: `2` and `3`.

// 19. `array_transformation.js:18`:
//     - The line number where the next transformation occurred.

// 20. `3`:
//     - The value of the element at index `3` (after the transformation).

// 21. `array_transformation.js:20`:
//     - The line number where the next transformation occurred.

// 22. `2`:
//     - The value of the element at index `2` (after the transformation).

// 23. `array_transformation.js:21`:
//     - The line number where the next transformation occurred.

// 24. `(3) [2, 3, 4]`:
//     - The final array after all transformations, now containing three elements: `2`, `3`, and `4`.

// 25. `4 talking about number inside ()`:
//     - This part seems to be a comment or description related to the transformation process.

// If you have any specific questions or need further clarification, feel free to ask! 😊

// The expression fn(arr[i], i) in the context of the map function represents the invocation of a callback function (fn) with two arguments for each element in the array arr:

// arr[i]: The current element being processed in the array. This is the value of the element at index i.
// i: The index of the current element being processed in the array.
// The purpose of passing both the element arr[i] and its index i to the function fn is to provide more flexibility in how each element can be transformed. The callback function fn can use not only the element's value but also its position within the array to determine the result of the transformation.

// Here are a few examples to illustrate how this works:

// Example with just the element (arr[i]):

// function plusOne(n) {
//   return n + 1;
// }
// Copy
// This plusOne function takes a number n (an element from the array) and returns that number plus one. It ignores the index i since it's not a parameter of the function.

// Example using the index (i):

// function plusI(n, i) {
//   return n + i;
// }
// Copy
// This plusI function takes a number n and its index i, and returns the sum of the number and its index. This allows for transformations that depend on the position of the element within the array, not just the value of the element itself.

// Example ignoring both parameters:

// function constant() {
//   return 42;
// }
// Copy
// This constant function ignores both its parameters and always returns the number 42. It shows that the function can be defined to not necessarily use the provided arguments, though in the context of map, it would typically at least use the element's value.

// The flexibility of fn(arr[i], i) allows for a wide range of possible transformations on the array elements, making the map function a powerful tool for generating new arrays based on the values and positions of elements in the original array.


// Consider an array [1, 2, 3] and a transformation function that adds the current index to the element's value: function plusI(n, i) { return n + i; }.

// Here's what happens step by step:

// Initial Array
// [1, 2, 3]

// Mapping Function
// function plusI(n, i) { return n + i; }

// Iterations
// First Iteration (i = 0)

// The first element of the array is 1, and its index (i) is 0.
// The function plusI is called with n = 1 and i = 0.
// plusI(1, 0) returns 1 + 0 = 1.
// The new array at this point is [1].
// Second Iteration (i = 1)

// The second element of the array is 2, and its index (i) is 1.
// The function plusI is called with n = 2 and i = 1.
// plusI(2, 1) returns 2 + 1 = 3.
// The new array is now [1, 3].
// Third Iteration (i = 2)

// The third element is 3, and its index (i) is 2.
// The function plusI is called with n = 3 and i = 2.
// plusI(3, 2) returns 3 + 2 = 5.
// The final new array is [1, 3, 5].
// Final Result
// The returned array after applying the plusI function to each element is [1, 3, 5].

// Explanation
// In each iteration, the map function uses the current element's value (arr[i]) and its index (i) as arguments to the transformation function fn.
// The transformation function fn can then perform operations based on the element's value, its index, or both.
// The result of calling fn on each element forms a new array, which is the final result of the map operation.
// This process allows each element in the array to be transformed not just based on its value but optionally using its position in the array as well, providing a versatile way to generate a new array based on the original.