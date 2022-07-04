import { Fancybox } from "@fancyapps/ui";

class Fancy{

  init() {
    window.Fancybox = Fancybox;
    window.Fancybox.bind("[data-fancybox='dialog']", {
      autoFocus:false,
      type: "inline",
      groupAttr: false,
      dragToClose: false,
      on: {
        done: (fancybox, slide) => {
          
          $('.fancybox__slide .modal').after('<div class="modal-backdrop" tabindex="-1"></div>')

          $('.modal-backdrop').on('mouseenter', function(e){
            $('.js-cursor').addClass('is-cross')
          });
          $('.modal-backdrop').on('mouseleave', function(e){
            $('.js-cursor').removeClass('is-cross')
          });
          
  
        },
       
        closing: (fancybox, slide) => {
          $('.js-cursor').removeClass('is-cross')
        },
      },
    });

    $(".js-fancybox-close").click(function(){
     window.Fancybox.close()
    })
  }
}

export default new Fancy()