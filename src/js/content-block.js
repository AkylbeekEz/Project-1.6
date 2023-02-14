contentBlocks = document.querySelectorAll('.content-block'); 

const handleContentBlock = (contentBlock) => {
 var showMore = contentBlock.querySelector('.content-block__show-more'); 
 var swiper = contentBlock.querySelector('.content-block__swiper');
 var popupIcon = showMore.querySelector('.btn__popup-icon'); 
 var showMoreText = showMore.querySelector('span'); 
 if (window.innerWidth >= 768) {
  showMore.classList.remove('content-block__show-more--hidden');  
 } 
 showMore.addEventListener('click', () => { 
  popupIcon.classList.toggle('btn__popup-icon--inverse');  
  console.log(showMoreText);
  if (showMoreText.textContent === "Показать все") showMoreText.textContent = "Скрыть"; 
  else showMoreText.textContent = "Показать все";
  swiper.classList.toggle('content-block__swiper--height--full');
 })
 window.addEventListener('resize', (evt) => {
  if (window.innerWidth >= 768) {
   swiper.classList.remove('content-block__swiper--hidden'); 
   showMore.classList.remove('content-block__show-more--hidden');
  } else {
   showMore.classList.add('content-block__show-more--hidden'); 
   swiper.classList.add('content-block__swiper--hidden');
  }
 })
}
 
for (let i = 0; i < 2; i++) { 
 handleContentBlock(contentBlocks[i]);  
}