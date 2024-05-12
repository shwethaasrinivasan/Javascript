var timeLimit = function(fn, t) {
    return async function(...args) {
        let timeout;
        const timeoutPromise = new Promise((_, reject) => {
            timeout = setTimeout(() => reject("Time Limit Exceeded"), t);
        });

        try {
            const result = await Promise.race([fn(...args), timeoutPromise]);
            clearTimeout(timeout); // Clear the timeout if fn resolves in time
            return result;
        } catch (err) {
            clearTimeout(timeout); // Clear the timeout in case of an error
            throw err;
        }
    }
};

// Example usage:
const limited = timeLimit(async (n) => {
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
}, 50);

const start = performance.now();
limited(5).then(res => {
    console.log({"resolved": res, "time": Math.floor(performance.now() - start)});
}).catch(err => {
    console.log({"rejected": err, "time": Math.floor(performance.now() - start)});
});
