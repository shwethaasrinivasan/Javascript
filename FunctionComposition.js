// function composeFunctions(functions) {
//     return function(x) {
//       return functions.reduceRight((acc, func) => func(acc), x);
//     };
//   }
  
//   // Example 1
//   const functions1 = [x => x + 1, x => x * x, x => 2 * x];
//   console.log(composeFunctions(functions1)(4)); // Output: 65
  
//   // Example 2
//   const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
//   console.log(composeFunctions(functions2)(1)); // Output: 1000
  
//   // Example 3
//   const functions3 = [];
//   console.log(composeFunctions(functions3)(42)); // Output: 42
  

  
function composeFunctions(functions) {
    return function(x) {
      let result = x;
      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
      }
      return result;
    };
  }
  
  // Example 1
  const functions1 = [x => x + 1, x => x * x, x => 2 * x];
  console.log(composeFunctions(functions1)(4)); // Output: 65
  
  // Example 2
  const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
  console.log(composeFunctions(functions2)(1)); // Output: 1000
  
  // Example 3
  const functions3 = [];
  console.log(composeFunctions(functions3)(42)); // Output: 42
  