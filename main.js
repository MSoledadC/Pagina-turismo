//get the Element

const nabvar = document.querySelector("nav"); 
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");


//toggle

menuBtn.addEventListener( "click", ()=>{
    
    nabvar.classList.toggle("nav-background");
    menu.classList.toggle("nav-toggle");
});




//


