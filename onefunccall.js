var once = function(fn) {
    let called = false;
    let result;
    
    return function(...args) {
        if (!called) {
            result = fn(...args);
            called = true;
            return result;
        }
        return undefined;
    };
};

// Example 1
let fn1 = (a, b, c) => (a + b + c);
let onceFn1 = once(fn1);

console.log(JSON.stringify([{ "calls": 1, "value": onceFn1(1, 2, 3) }])); // [{"calls": 1, "value": 6}]
console.log(JSON.stringify([{ "calls": 2, "value": onceFn1(2, 3, 6) }])); // [{"calls": 2, "value": undefined}]

// Example 2
let fn2 = (a, b, c) => (a * b * c);
let onceFn2 = once(fn2);

console.log(JSON.stringify([{ "calls": 1, "value": onceFn2(5, 7, 4) }])); // [{"calls": 1, "value": 140}]
console.log(JSON.stringify([{ "calls": 2, "value": onceFn2(2, 3, 6) }])); // [{"calls": 2, "value": undefined}]
console.log(JSON.stringify([{ "calls": 3, "value": onceFn2(4, 6, 8) }])); // [{"calls": 3, "value": undefined}]
