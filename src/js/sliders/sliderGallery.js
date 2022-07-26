import Swiper from "swiper/swiper-bundle";
export default function(){

 if ($('.js-swiper-gallery-small .swiper-slide').length > 1) {
 var large = new Swiper(".js-swiper-gallery-large", {
  loop: true,
  loopedSlides: $('.js-swiper-gallery-small .swiper-slide').length,
  effect: 'fade',
  watchSlidesVisibility: true,
});

var small = new Swiper(".js-swiper-gallery-small", {
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: $('.js-swiper-gallery-small .swiper-slide').length,
  spaceBetween: 20, 
  slidesPerView: $('.js-swiper-gallery-small .swiper-slide').length,
  watchSlidesVisibility: true,
  navigation:{
   prevEl: `.catalog-details__gallery-large [ref="prev"]`,
   nextEl: `.catalog-details__gallery-large [ref="next"]`,
 }
});
if(document.querySelector('.js-swiper-gallery-large')){
 large.controller.control = small;
 small.controller.control = large;
}}
else{
 $('.catalog-details__gallery').addClass('is-one-slide')
}
}