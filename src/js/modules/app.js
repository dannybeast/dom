import Helpers from "./helpers";

class App{

  hideCookieAlert(){
    $('.cookie-alert__btn').click(function(e){
     e.preventDefault();
     $(this).closest('.cookie-alert').addClass('is-hide')
    })
  }

  anchors(){
   $('.js-anchor').on('click', function (e) {
    e.preventDefault();
    var scrollTarget = $(this).attr('href');
    $("html").animate({
     scrollTop: $(scrollTarget).offset().top - 30
    }, 500);
   });

  }


}

export default new App()