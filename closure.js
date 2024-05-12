function x() {
    let i = 10;
    setTimeout(function(){
        console.log(i)
    },3000)
    console.log("Will I be executed first?")
    console.log("Yes")
}
x();


function outer(){
    var a = 10;
    function inner(){
        console.log(a) // this function along with lexical parent is closure
    }
    return inner;
}

outer()();