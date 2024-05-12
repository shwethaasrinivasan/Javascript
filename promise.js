// const GITHUB_API = "https://api.github.com/users/shwethaasrinivasan"
// // `fetch` is asynchronous and returns a Promise. You cannot directly access `PromiseState` like that.
// // You should handle the promise using `.then()` and `.catch()` or async/await.

// const user = fetch(GITHUB_API)
// console.log(user)

// user.then(function(data ){
//     console.log(data)
// })

// fetch(GITHUB_API)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // Convert the response to JSON
//   })
//   .then(data => {
//     console.log("Data received:", data); // Process your data here
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error); // Handle any errors
//   });

// const pr1 = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve("Promise Resolved Value!")
//     },10000)
// })

// const pr2 = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve("Promise Resolved Value!")
//     },5000)
// })

// function getData(){
//     pr.then((res) => console.log(res));
//     console.log("I will execute before promises")
// }

// getData();

// async function getData() {
//     //return "hey"; //either return a promise or automatically wraps a value to promise and return a promise
//     return pr;
// }

// const data = getData();
// console.log(data)

// data.then((res) => console.log(res))

// async function handlePromise(){
//     console.log("I will get printed immediately since I'm before Async promise")

//     const val  = await pr1; //waiting here to promises to resolve
//     console.log("Async promises! I will wait for promise to resolve")
//     console.log(val)

//     const val2  = await pr2; //waiting here to promises to resolve
//     console.log("Async promises! I will wait for other promises to resolve")
//     console.log(val2) //all of it will execute at a time though the time is 5seconds, vice versa if p1 is 5 seconds and p2 is 10seconds -> p1 is printed after 5 seconds and p2 after 10seconds
// }

// handlePromise();


// const GIT_HUB_API = "https://api.github.com/users/shwethaasrinivasan";

// async function fetchPromise(){

//     try {
//         const data = await fetch(GIT_HUB_API) //returns promise, handlePromise function execution will suspend here and resumes only after promise is fulfilled/resolved

//     //fetch() is a promise, when its resolved it gives response object which is a readable stream. response.json() is again a promise => when resolved -> jsonValue
//     const jsonValue = await data.json() //again its a promise 
//     //fetch().then(res=>res.json()).then(res=>console.log(""))
//     console.log(jsonValue)
//     } catch (err) {
//         console.log(err)
//     }
    

// }
// fetchPromise();
// //fetchPromise().catch(err=>console.log(err))


const p1 = new Promise((resolve,reject) => {
    //setTimeout(()=> resolve("P1 success"),3000)
    setTimeout(()=> reject("P1 reject"),3000)
})

const p2 = new Promise((resolve,reject) => {
    //setTimeout(()=> resolve("P2 success"),5000)
     setTimeout(()=> reject("P2 reject"),5000)
})

const p3 = new Promise((resolve,reject) => {
    //setTimeout(()=> resolve("P3 success"),2000)
    setTimeout(()=> reject("P3 reject"),2000)
})

// Promise.all([p1,p2,p3]).then((res) =>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })

// Promise.allSettled([p1,p2,p3]).then((res) =>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })

// Promise.race([p1,p2,p3]).then((res) =>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })

Promise.any([p1,p2,p3]).then((res) =>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
    console.log(err.errors)
})