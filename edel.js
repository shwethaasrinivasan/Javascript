// document.querySelector("#category").addEventListener('click',(e) =>{ // (e) is an event obj what we receive in the callback method
//     console.log(e.target.id)
//     if(e.target.tagName == 'LI'){
//         window.location.href = "/" + e.target.id; //GET http://127.0.0.1:5500/laptops 404 (Not Found)
//     }
    
// });

document.querySelector("#form").addEventListener('keyup',(e)=>{
    console.log(e);
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
})