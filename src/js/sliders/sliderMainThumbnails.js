import Swiper from "swiper/swiper-bundle";

class sliderMainThumbnails {
  constructor(){
    this.el = ".js-main-thumbnails-swiper",
    this.options = {
      loop: false,
      noSwiping: false,
      watchSlidesVisibility: true,
      freeMode: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      spaceBetween: 35,
      slidesPerView: 'auto', 
      breakpoints: {
        0: {
          spaceBetween: 10,
        }, 
        768: {
          spaceBetween: 35,
        },
  
      },
    }
  }


  init(){
    let swiper = new Swiper(`${this.el}`, this.options)

  }
}

export default new sliderMainThumbnails()