function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    return {
        call(...args) {
            const key = JSON.stringify(args);
            if (cache.has(key)) {
                return cache.get(key);
            } else {
                const result = fn(...args);
                cache.set(key, result);
                callCount += 1;
                return result;
            }
        },
        getCallCount() {
            return callCount;
        }
    };
}

function executeMemoize(fnName, actions, values) {
    let fn;
    if (fnName === "sum") {
        fn = (a, b) => a + b;
    } else if (fnName === "fib") {
        fn = function fib(n) {
            return n <= 1 ? n : fib(n - 1) + fib(n - 2);
        };
    } else if (fnName === "factorial") {
        fn = function factorial(n) {
            return n <= 1 ? 1 : n * factorial(n - 1);
        };
    }

    const memoizedFn = memoize(fn);
    const results = [];
    actions.forEach((action, index) => {
        if (action === "call") {
            results.push(memoizedFn.call(...values[index]));
        } else if (action === "getCallCount") {
            results.push(memoizedFn.getCallCount());
        }
    });

    return results;
}

// Example 1
console.log(executeMemoize("sum", ["call", "call", "getCallCount", "call", "getCallCount"], [[2, 2], [2, 2], [], [1, 2], []]));
// Output: [4, 4, 1, 3, 2]

// Example 2
console.log(executeMemoize("factorial", ["call", "call", "call", "getCallCount", "call", "getCallCount"], [[2], [3], [2], [], [3], []]));
// Output: [2, 6, 2, 2, 6, 2]

// Example 3
console.log(executeMemoize("fib", ["call", "getCallCount"], [[5], []]));
// Output: [5, 1]
