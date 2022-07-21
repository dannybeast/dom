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


  toggleSorting(){
   $('.js-toggle-sorting input').on('click', function (e) {
   
    let asc = 'sorting-asc',
        desc = 'sorting-desc'
    
    if($(this).hasClass(asc)){
     $(this).removeClass(asc)
     $(this).addClass(desc)
     

    }else{
     $(this).removeClass(desc)
     $(this).addClass(asc)

    }

    
   });
  }


}

export default new App()