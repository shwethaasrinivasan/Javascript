class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const now = Date.now();
        const expiry = now + duration;
        const alreadyExists = this.cache.has(key) && this.cache.get(key).expiry > now;
        this.cache.set(key, { value, expiry });
        // Cleanup expired keys in the background
        this.cleanup();
        return alreadyExists;
    }

    get(key) {
        const now = Date.now();
        const item = this.cache.get(key);
        if (item && item.expiry > now) {
            return item.value;
        }
        return -1; // Key does not exist or has expired
    }

    count() {
        const now = Date.now();
        let count = 0;
        this.cache.forEach((value, key) => {
            if (value.expiry > now) {
                count++;
            }
        });
        return count;
    }

    cleanup() {
        const now = Date.now();
        const keysToDelete = [];
        this.cache.forEach((value, key) => {
            if (value.expiry <= now) {
                keysToDelete.push(key);
            }
        });
        keysToDelete.forEach(key => this.cache.delete(key));
    }
}

// Example usage:
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 100)); // false
setTimeout(() => console.log(timeLimitedCache.get(1)), 50); // 42
setTimeout(() => console.log(timeLimitedCache.count()), 50); // 1
setTimeout(() => console.log(timeLimitedCache.get(1)), 150); // -1
