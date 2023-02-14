
var callButtons = document.querySelectorAll('.btn-call');
var modalCall = document.querySelector('.modal--call'); 
var modalTuman = document.querySelector('.tuman--modal');

const listenAndToggle = (button, block, mod) => {
 button.addEventListener('click', (evt) => {
  evt.preventDefault(); 
  console.log(button);
  block.classList.toggle(mod);
 })  
}   

for (var i = 0; i < callButtons.length; i++) { 
 listenAndToggle(callButtons[i], modalCall, 'modal--hidden');  
 listenAndToggle(callButtons[i], modalTuman, 'tuman--hidden'); 
}

modalTuman.addEventListener('click', () => {
 if (window.innerWidth >= 768 && window.innerWidth < 1368)  {
  modalCall.classList.toggle('modal--hidden');
  modalTuman.classList.toggle('tuman--hidden');
 }
})
 

