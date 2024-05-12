let multiply = function(x,y) {
    console.log(x*y)
}


let multiplybytwo = function(x,y) {
    let x = 2;
    console.log(x*y)
}

let multiplyby2 = multiply.bind(this,2); //same as copying multiple method and assigning x to 2

multiplyby2(5); //5 here points to y

let multiplyby3 = multiply.bind(this,3) 
//this is called function currying using bind method, making a copy of multiply method and create more methods out of it by presetting args inside 
//a function like how 2 and 3 is preset to x here

//method 2 is using function closure

let multiplyclosure = function(x) {
    return function(y) {
        console.log(x*y)
    }
} //function having access to its lexical scope called closure

let multiplyby2closure = multiplyclosure(2);
multiplyby2closure(3);