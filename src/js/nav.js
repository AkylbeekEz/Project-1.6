var siteNav = document.querySelector('.site-nav'); 
var pageNav = document.querySelector('.page-nav');    

const handleNavItemClick = (item, nav, itemName) => { 
 item.addEventListener('click', (evt) => { 
  evt.preventDefault(); 
  var navItemActive = nav.querySelector(itemName + '--active');
  navItemActive.classList.toggle(itemName.slice(1) + '--active'); 
  item.classList.toggle(itemName.slice(1) + '--active');
 });
} 

const handleNav = (nav, item) => {
 var navItems = nav.querySelectorAll(item);  
 for (var i = 0; i < navItems.length; i++) {
  handleNavItemClick(navItems[i], nav, item);
 }
}   
 

handleNav(siteNav, '.site-nav__item');
handleNav(pageNav, '.page-nav__item');