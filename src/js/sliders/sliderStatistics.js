import Swiper from "swiper/swiper-bundle";

class sliderStatistics {
  constructor(){
    this.el = ".js-statistics-swiper",
    this.options = {
      loop: false,
      slidesPerView: 4, 
      noSwiping: true,
      watchSlidesVisibility: true,
      spaceBetween: 35,
      freeMode:true,
      breakpoints: {
       0: {
        slidesPerView: 'auto',
        spaceBetween: 10,
         noSwiping: false,
       }, 
       768: {
        slidesPerView: 4,
         noSwiping: true,
         spaceBetween: 35,
       },
 
     },

    }
  }


  init(){
    let that = this;
    this.options.navigation = {
      prevEl: `${this.el} [ref="prev"]`,
      nextEl: `${this.el} [ref="next"]`,
    }
    let swiper = new Swiper(`${this.el}`, this.options)

  }
}

export default new sliderStatistics()