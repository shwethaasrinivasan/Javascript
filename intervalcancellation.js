var cancellable = function(fn, args, t) {
    const start = performance.now();
    let intervalId = setInterval(() => {
        fn(...args);
        console.log({"time": Math.floor(performance.now() - start), "returned": fn(...args)});
    }, t);
    fn(...args); // Immediate call
    console.log({"time": 0, "returned": fn(...args)});

    return function cancelFn() {
        clearInterval(intervalId);
    };
};

// Example usage:
const result = [];

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(...argsArr)});
};

const fn = (x) => x * 2;
const args = [4], t = 35, cancelTimeMs = 190;

const start = performance.now();
       
const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTimeMs);
   
setTimeout(() => {
    console.log(result);
}, cancelTimeMs + t + 15);
