const menuOne = document.querySelector('#menu-bar');
const exitOne = document.querySelector('#close-menu');
const mainMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mob-menu');
const leafy = document.querySelector('#logo');



menuOne.addEventListener("click",(e)=>{
    // mainMenu.style.display = 'block';
    // mainMenu.classList.remove('animate__animated', 'animate__slideOutLeft')
    mainMenu.classList.add('animate__animated', 'animate__slideInLeft')
})
exitOne.addEventListener("click",(e)=>{
    // mainMenu.style.display = 'none';
    // mainMenu.classList.remove('animate__animated', 'animate__slideIntLeft')
    mainMenu.classList.add('animate__animated', 'animate__slideOutLeft')
    
})
leafy.addEventListener("click",(e)=>{
    // mainMenu.style.display = 'none';
    // mainMenu.classList.remove('animate__animated', 'animate__slideIntLeft')
    mainMenu.style.display ="block"
    mainMenu.classList.add('animate__animated', 'animate__slideInDown')
    
})


mobileMenu.addEventListener("click",(e)=>{
    // mainMenu.style.display = 'none';
    // mainMenu.classList.remove('animate__animated', 'animate__slideIntLeft')
    mainMenu.style.display ="block"
    mainMenu.classList.add('animate__animated', 'animate__slideInDown')
    
})






























// function clickHandler(event){
//     mainMenu.classList.add('animate__animated', 'animate__slideInLeft');
// }
// menuOne.addEventListener('click', clickHandler);




























// function clickHandler(event){

// }
// menuOne.addEventListener('click', clickHandler )


