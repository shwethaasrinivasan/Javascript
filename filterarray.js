// var filter = function(arr, fn) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(result)
//         // result.push(fn(arr[i], i));
//     }
//     return result(fn(arr[i], i));
// };
// const arr1 = [1, 2, 3];
// const greaterThan10 = n => n > 10;
// console.log(filter(arr1, greaterThan10)); 

// const arr2 = [1, 2, 3];
// const firstIndex = (n, i) => i === 0;
// console.log(filter(arr2, firstIndex)); 

// const arr3 = [10, 20, 30];
// const plusOne = (n) => n+1;
// console.log(filter(arr3, plusOne)); 


var filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};


const arr1 = [0, 10, 20, 30];
const greaterThan10 = n => n > 10;
console.log(filter(arr1, greaterThan10)); 

const arr2 = [1, 2, 3];
const firstIndex = (n, i) => i === 0;
console.log(filter(arr2, firstIndex)); 

const arr3 = [-2, -1, 0, 1, 2];
const plusOne = n => n + 1;
console.log(filter(arr3, plusOne)); 
