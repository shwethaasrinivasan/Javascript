var createCounter = function (init) {
  let counterval = init;

  return {
    increment: () => {
      return counterval += 1;
    },
    decrement: () => {
      return counterval -= 1;
    },
    reset: () => {
      counterval = init;
      return counterval;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.reset()); // Output: 5
console.log(counter.decrement()); // Output: 4

// var createCounter = function(init) {
//     let currentValue = init;

//     return {
//         increment: () => {
//             currentValue += 1;
//             return currentValue;
//         },
//         decrement: () => {
//             currentValue -= 1;
//             return currentValue;
//         },
//         reset: () => {
//             currentValue = init;
//             return currentValue;
//         }
//     };
// };

// // Example usage:
// const counter1 = createCounter(5);
// console.log(counter1.increment()); // Output: 6
// console.log(counter1.reset()); // Output: 5
// console.log(counter1.decrement()); // Output: 4

// const counter2 = createCounter(0);
// console.log(counter2.increment()); // Output: 1
// console.log(counter2.increment()); // Output: 2
// console.log(counter2.decrement()); // Output: 1
// console.log(counter2.reset()); // Output: 0
// console.log(counter2.reset()); // Output: 0

var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
        
    }
};


const f = createHelloWorld();
console.log(f()); 
console.log(f({}, null, 42)); 