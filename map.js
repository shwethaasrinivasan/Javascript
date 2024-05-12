const users = [
    {firstname:"shwethaa", lastname: "srinivasan",age: "29"},
    {firstname:"srik", lastname: "k",age: "35"},
    {firstname:"shreesha", lastname: "s",age: "20"},
    {firstname:"ss", lastname: "s",age: "29"},
]
//{29:2, 30:1, 35:1}

const output = users.reduce(function(acc,curr){

    if (acc[curr.age]){


    } 
    else {
        acc[curr.age] = 1
    }
},{})

console.log(output)