let open = document.querySelector('.open');
let close = document.querySelector('.close');
let hamburger = document.querySelector('.hamburger');
let secondPart = document.querySelector('.secondPart');
let thirdPart = document.querySelector('.thirdPart');
 hamburger.addEventListener('click',()=>{
   open.classList.toggle('active');
   close.classList.toggle('active');
   secondPart.classList.toggle('active');
   thirdPart.classList.toggle('active');
 });
