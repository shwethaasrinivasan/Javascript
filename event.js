document.querySelector("#grandparent")
.addEventListener('click', (e) =>{
    console.log("Grandparent click")
    e.stopPropagation(); //propagation cycle starts from top in case of event capturing
}, true); //third arg is false as default -> bubbling mode - false

document.querySelector("#parent")
.addEventListener('click', () =>{ 
    console.log("Parent click");
}, true);

document.querySelector("#child")
.addEventListener('click', (e) =>{
    console.log("Child click")
    e.stopPropagation(); //event propagation won't bubble out and all event handlers won't be called.
}, true); // if true event capturing - grandparent callback method is called first, top-down hierarchy -> this how control for event propagation happens with click handlers