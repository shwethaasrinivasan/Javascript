function sleep(millis) {
    return new Promise(resolve => setTimeout(() => resolve(millis), millis));
}

// Example usage
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // Approximately 100ms

t = Date.now();
sleep(200).then(() => console.log(Date.now() - t)); // Approximately 200ms
