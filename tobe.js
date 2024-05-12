var expect = function(val) {
    return {
        toBe: (compareVal) => { //ES6
            if (val === compareVal) {
                return { value: true };
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (compareVal) => {
            if (val !== compareVal) {
                return { value: true };
            } else {
                throw new Error("Equal");
            }
        }
    };
};

try {
    console.log(expect(5).toBe(5)); 
    console.log(expect(5).notToBe(5)); 
    console.log(expect(5).notToBe(null));
} catch (error) {
    console.error(error.message);
}

// Certainly! Let's discuss closures in JavaScript and how they relate to the problem you provided.

// 1. **What Is a Closure?**
//     - A **closure** is a fundamental concept in JavaScript.
//     - It occurs when an inner function (a function defined inside another function) has access to the outer function's variables, even after the outer function has finished executing.
//     - Closures "remember" the lexical scope in which they were created.

// 2. **How Closures Work**:
//     - When a function is defined inside another function, it forms a closure.
//     - The inner function has access to the outer function's variables and parameters.
//     - Even if the outer function completes execution, the inner function retains access to those variables.

// 3. **Example with Your Problem**:
//     - In your problem, the `expect` function returns an object with two methods: `toBe` and `notToBe`.
//     - These methods are closures because they have access to the `val` parameter of the outer `expect` function.
//     - When you call `expect(5).toBe(5)`, the inner `toBe` function compares the provided value with the original `val` (which is `5` in this case).

// 4. **Closures and State**:
//     - Closures allow you to maintain state across multiple function calls.
//     - In your problem, the `val` parameter serves as the initial state, and subsequent calls to `toBe` and `notToBe` modify that state.

// In summary, closures are powerful tools in JavaScript that enable encapsulation, private variables, and maintaining state. They play a crucial role in solving various programming challenges. 😊