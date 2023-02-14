var burgerMenu = document.querySelector('.burger-menu');
var burgerTuman = document.querySelector('.tuman--burger'); 
var burger = document.querySelectorAll('.btn-burger');  

burgerTuman.addEventListener( 'click' ,  ( ) => {
 if (window.innerWidth < 1368) {
  burgerMenu.classList.toggle('burger-menu--hidden');   
  burgerTuman.classList.toggle('tuman--hidden');
 }
})

const listenAndToggle = (button, block, mod) => {
 button.addEventListener('click', (evt) => {
  evt.preventDefault(); 
  console.log(button);
  block.classList.toggle(mod);
 })  
}   

for (var i = 0; i < burger.length; i++) {
 listenAndToggle(burger[i], burgerMenu, 'burger-menu--hidden'); 
 listenAndToggle(burger[i], burgerTuman, 'tuman--hidden');
} 
