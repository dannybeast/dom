import Swiper from "swiper/swiper-bundle";

class sliderContractors {
  constructor(){
    this.el = ".js-contractors-swiper",
    this.options = {
     spaceBetween: 20,
     watchSlidesVisibility: true,
     observeParents: true,
     observer: true,
     slidesPerView: 4,
     navigation: {
      prevEl: `${this.el} [ref="prev"]`,
      nextEl: `${this.el} [ref="next"]`,
    }
    }
  }

  init(){
    let that = this;
    new Swiper(that.el, that.options)
   
  }
}

export default new sliderContractors()