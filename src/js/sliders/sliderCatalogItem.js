import Swiper from "swiper/swiper-bundle";

class sliderCatalogItem {
  constructor(){
    this.el = ".js-catalog-item-swiper",
    this.options = {
     pagination: {
       el: ".swiper-pagination"
     }

    }
  }

  mouseMove(swiper, uniq, el){
   
    var width = el.width();
    var ln = swiper.slides.length;
    var per = width / ln;
  
    $("#" + uniq).on("mousemove", function (e) {
     console.log('q');
      var parentOffset = el.parent().offset();
      //or $(this).offset(); if you really just want the current element's offset
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
  
      for (let i = 0; i < ln; i++) {
        var pos = per * i;
  
        if(relX >= pos && pos <= pos) {
          swiper.slideTo(i);
        }
      }
    });
  }

  init(){
    let that = this;
    
    $(this.el).each(function(){
    
     var uniq = "swiper--auto-" + new Date().getTime();
     $(this).attr("id", uniq);
     let swiper = new Swiper($("#" + uniq)[0], that.options)
     that.mouseMove(swiper, uniq, $(this))
    })

   
  }
}

export default new sliderCatalogItem()