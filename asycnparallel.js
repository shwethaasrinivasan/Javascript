var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedPromises = 0;

        if (functions.length === 0) {
            resolve(results);
        }

        functions.forEach((func, index) => {
            // Immediately invoke each asynchronous function
            func().then(value => {
                results[index] = value;
                completedPromises += 1;
                // Check if all promises have been resolved
                if (completedPromises === functions.length) {
                    resolve(results);
                }
            }).catch(reason => {
                // Reject the whole promise if any promise rejects
                reject(reason);
            });
        });
    });
};

// Example usage:

// Example 1:
const functions1 = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
];

promiseAll(functions1).then(result => console.log({"t": 200, "resolved": result}));

// Example 2:
const functions2 = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
];

promiseAll(functions2).then(result => console.log(result)).catch(error => console.log({"t": 100, "rejected": error}));

// Example 3:
const functions3 = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
];

promiseAll(functions3).then(result => console.log({"t": 150, "resolved": result}));
