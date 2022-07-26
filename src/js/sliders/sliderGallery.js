import Swiper from "swiper/swiper-bundle";
export default function(){
 var large = new Swiper(".js-swiper-gallery-large", {
  loop: true,
  loopedSlides: 3,
  freeMode:false,
  spaceBetween: 10,
  slidesPerView: 1,
  effect: 'fade',
  watchSlidesVisibility: true,
});

var small = new Swiper(".js-swiper-gallery-small", {
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 3,
  spaceBetween: 30,  
  slidesPerView: 3, 
  watchSlidesVisibility: true,
  breakpoints: {
   0: {
    spaceBetween: 15,
   }, 

    768: {
     spaceBetween: 30,  
   },
 },
  navigation:{
   prevEl: `.catalog-details__gallery-large [ref="prev"]`,
   nextEl: `.catalog-details__gallery-large [ref="next"]`,
  
 }
});
if(document.querySelector('.js-swiper-gallery-large')){
 large.controller.control = small;
 small.controller.control = large;
}
}