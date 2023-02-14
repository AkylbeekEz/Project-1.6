const handleSwiper = function (swiperName) {
  let swiper; 

  const breakpoint = window.matchMedia('(min-width:768px)'); 
  const breakpointChecker = function () {

    if (breakpoint.matches === true) { 
      if (swiper !== undefined) {   
        swiper.destroy( ); 
      }
      return;
    } else if (breakpoint.matches === false) { 
      return enableSwiper(); 
    } 
  };

  const enableSwiper = function () { 
    swiper = new Swiper("." + swiperName, {
      direction: "horizontal",
      enabled: true,
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: '.' + swiperName + '__pagination',
        clickable: true,
      }, 
    });
  };

  breakpoint.addListener(breakpointChecker); 
  breakpointChecker();
}

handleSwiper('swiper');

handleSwiper('swiper-2');

handleSwiper('swiper-3');
