let arr = ["Shwethaa", "Srinivasan"];

let object = {
    name:"shwethaa",
    city:"Chennai",
    getIntro: function() {
        console.log(this.name+ " from " +this.city)
    }
}
let object2 ={
    name:"srinivasan",
}

//Never do this
object2.__proto__ = object;


function func() {

}

//Whenever we create an object, it attaches object to original object, access hidden object. whenever we create a variable they get access to hidden properties and methods.

//JS engine puts the hidden props and attaches obj to original obj and that's how we get access to those props

//arr.__proto__ -> this is the obj JS engine is putting all func and methods, object.__proto__, so this obj is attached to all objects that we create in JS, be it variable, function, object etc.

//Array.prototype is same as arr.__proto__. And arr.__proto__ also has prototype.

//arr.__proto__.__proto__ -> we get Object.prototype

//arr.__proto__proto__proto -> null (Object prototype's prototype -> null)

//same as func-> fun.__proto__

//Function.prototype -> func.__proto__.proto__ -> Object.prototype -> null -> EVERYTHING IN JS IS AN OBJECT - This is called prototype chain ending up being null.

//So object 2 inherits properties of , access to variables and methods, per prototype chain
