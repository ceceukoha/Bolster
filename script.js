const menuOne = document.querySelector('#menu-bar');
const exitOne = document.querySelector('#close-menu');
const mainMenu = document.querySelector('.menu');


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






























// function clickHandler(event){
//     mainMenu.classList.add('animate__animated', 'animate__slideInLeft');
// }
// menuOne.addEventListener('click', clickHandler);




























// function clickHandler(event){

// }
// menuOne.addEventListener('click', clickHandler )


