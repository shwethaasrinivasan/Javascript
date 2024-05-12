var debounce = function(fn, t) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), t);
    };
};

// Example usage:
// Simulation of the debounce function behavior

let start = Date.now();

function log(...inputs) { 
  console.log({"t": Date.now() - start, inputs});
}

const dlog = debounce(log, 50);

setTimeout(() => dlog(1), 50);  // This call is cancelled
setTimeout(() => dlog(2), 75);  // This call is delayed to 125ms

// Output will be: [{"t": 125, inputs: [2]}]

// For the second example
start = Date.now(); // Reset start time
const dlog2 = debounce(log, 20);
setTimeout(() => dlog2(1), 50); // This call is delayed until 70ms
setTimeout(() => dlog2(2), 100); // This call is delayed until 120ms

// Output will be: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]

// For the third example
start = Date.now(); // Reset start time
const dlog3 = debounce(log, 150);
setTimeout(() => dlog3(1, 2), 50);  // This call is delayed until 200ms
setTimeout(() => dlog3(3, 4), 300); // This call is cancelled
setTimeout(() => dlog3(5, 6), 300); // This call is delayed until 450ms

// Output will be: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]
