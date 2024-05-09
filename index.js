let name1 = {
    firstname: "Shwethaa",
    lastname: "S",
  }
  
  let printFullname = function (hometown, state, country) {
    console.log(this.firstname + " " + this.lastname +", "+hometown+", "+state+", "+country);
  }

  let printMyname = printFullname.bind(name1, "Chennai", "India");
  printMyname("Tamil Nadu");

  Function.prototype.mybind = function(...args) {
    let obj = this //this -> printFullname
    params = args.slice(1)
    return function(...args2) {
        obj.apply(args[0], [...params,...args2])

    }
  }


  let printMyname2 = printFullname.mybind(name1, "Chennai","India");
  printMyname2("Tamil Nadu")
