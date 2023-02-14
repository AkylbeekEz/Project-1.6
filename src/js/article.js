var article = document.querySelector('.article');

var articleTextContainer = article.querySelector('.article__text-container');  
var articleText = article.querySelector('.article__text');
var articleReadMore = articleTextContainer.querySelector('.article__read-more');
var articleReadMoreText = articleReadMore.querySelector('span');  

var textPopupIcon = articleTextContainer.querySelector('.btn__popup-icon');

articleReadMore.addEventListener('click', ( ) => {
 textPopupIcon.classList.toggle('btn__popup-icon--inverse');
 articleText.classList.toggle('article__text--height--full');
 var v = articleReadMoreText.textContent; 
 if (v === 'Читать далее') articleReadMoreText.textContent = 'Скрыть';
 else articleReadMoreText.textContent = 'Читать далее'; 
})

