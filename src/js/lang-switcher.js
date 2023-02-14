var langSwitcher = document.querySelector('.lang-switcher');
var langs = document.querySelectorAll('.lang-switcher__item'); 
var currentLang = langSwitcher.querySelector('.lang-switcher__item--active');

const handleLangSwitch = (lang) => {
 lang.addEventListener('click', (evt) => {
  evt.preventDefault();
  lang.classList.toggle('lang-switcher__item--active');
  currentLang.classList.toggle('lang-switcher__item--active');
  currentLang = lang;
 });
} 

for (var i = 0; i < langs.length; i++) {
 handleLangSwitch(langs[i]);
}