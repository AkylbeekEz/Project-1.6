  
var tuman = document.querySelector('.tuman--feedback'); 
var feedbacks = document.querySelectorAll('.btn-feedback');  
var modalFeedback = document.querySelector('.modal--feedback'); 

const listenAndToggle = (button, block, mod) => {
 button.addEventListener('click', (evt) => {
  evt.preventDefault(); 
  console.log(button);
  block.classList.toggle(mod);
 })  
}   

for (var i = 0; i < feedbacks.length; i++) { 
 listenAndToggle(feedbacks[i], modalFeedback, 'modal--hidden'); 
 listenAndToggle(feedbacks[i], tuman, 'tuman--hidden');
} 

tuman.addEventListener('click', () => {
 if (window.innerWidth >= 768 && window.innerWidth < 1368)  {
  modalFeedback.classList.toggle('modal--hidden');
  tuman.classList.toggle('tuman--hidden');
 }
})
 