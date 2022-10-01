const menuOne = document.querySelector('#menu-bar');
const exitOne = document.querySelector('#close-menu');
const mainMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mob-menu');
const logos = document.querySelector('#logo');


menuOne.addEventListener("click",(e)=>{
    mainMenu.style.display = 'block';
    // mainMenu.classList.remove('animate__animated', 'animate__slideOutLeft')
    mainMenu.classList.add('animate__animated', 'animate__slideInLeft')
})
exitOne.addEventListener("click",(e)=>{
    // mainMenu.style.display = 'none';
    // mainMenu.classList.remove('animate__animated', 'animate__slideIntLeft')
    mainMenu.classList.add('animate__animated', 'animate__slideOutLeft')
    
})
logos.addEventListener("click",(e)=>{
    mainMenu.style.display = 'block';
    // mainMenu.classList.remove('animate__animated', 'animate__slideIntLeft')
    mainMenu.classList.add('animate__animated', 'animate__slideOutLeft')
    
})
mobileMenu.addEventListener("click",(e)=>{
    mainMenu.style.display = 'block';
    // mainMenu.classList.remove('animate__animated', 'animate__slideIntLeft')
    mainMenu.classList.add('animate__animated', 'animate__slideInLeft')
    
})



// const callback = (entries) => {
//     entries.forEach(
//         (entry) => {
//             if (entry.isIntersecting) {
//                 console.log('This is intersecting')
//             }
//         }
//     )
// }

// let observer = new IntersectionObserver(callback);

const animationItems = document.querySelectorAll('.animate__animated');

animationItems.forEach(item => {
    observer.observe(item)
})





























// function clickHandler(event){
//     mainMenu.classList.add('animate__animated', 'animate__slideInLeft');
// }
// menuOne.addEventListener('click', clickHandler);




























// function clickHandler(event){

// }
// menuOne.addEventListener('click', clickHandler )


