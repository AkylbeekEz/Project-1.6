
var callButtons = document.querySelectorAll('.btn-call');
var modalCall = document.querySelector('.modal--call'); 
var tuman = document.querySelector('.tuman--call');

const listenAndToggle = (button, block, mod) => {
 button.addEventListener('click', (evt) => {
  evt.preventDefault(); 
  console.log(button);
  block.classList.toggle(mod);
 })  
}   

for (var i = 0; i < callButtons.length; i++) { 
 listenAndToggle(callButtons[i], modalCall, 'modal--hidden');  
 listenAndToggle(callButtons[i], tuman, 'tuman--hidden'); 
}

tuman.addEventListener('click', () => {
 if (window.innerWidth >= 768 && window.innerWidth < 1368)  {
  modalCall.classList.toggle('modal--hidden');
  tuman.classList.toggle('tuman--hidden');
 }
})
 

