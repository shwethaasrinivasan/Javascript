var addTwoPromises = async function(promise1, promise2) {
    // Await both promises to resolve and add their resolved values
    const value1 = await promise1;
    const value2 = await promise2;
    return value1 + value2;
};

// Example usage
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // 4

// Example 1
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
addTwoPromises(promise1, promise2)
  .then(console.log); // Output: 7

// Example 2
const promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50));
const promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30));
addTwoPromises(promise3, promise4)
  .then(console.log); // Output: -2
