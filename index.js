let name1 = {
  firstname: "Shwethaa",
  lastname: "S",
}

let printFullname = function (hometown, state) {
  console.log(this.firstname + " " + this.lastname + " from " + hometown + ", "+ state);
}

printFullname.call(name1, "Chennai", "Tamil Nadu"); //first parameter is always a reference to this variable, other args are args to function

let name2 = {
  firstname: "Srikanth",
  lastname: "K",
}

// function borrowing
printFullname.call(name2, "Chennai", "Tamil Nadu");

//apply method
printFullname.apply(name2, ["Chennai", "Tamil Nadu"]);

//bind method - gives a copy of exact method but can be invoked later
let printMyName = printFullname.bind(name2, "Chennai", "Tamil Nadu")
console.log(printMyName)
printMyName();