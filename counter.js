var createCounter = function(n) {
    let counterValue = n;
    return function() {
        return counterValue++;
    };
};

const counter = createCounter(10);
console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12
