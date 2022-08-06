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

  catalogItemToggleContent(){
   Helpers.toggleText();
   $('.catalog-row-item__show-more').click(function(){
    let $item = $(this).closest('.catalog-row-item');
    
    $(this).toggleClass('is-show')
    $(this).find('span').toggleText('Показать больше', 'Свернуть')
    $item.find('.catalog-row-item__params').toggleClass('is-show')

   })
  }

  toggleMobileMenu(){
  
   $('.header-redesign__btn-menu').on('click', function(e){
    e.preventDefault();
    $('.mobile-menu').toggleClass('is-open')
    $('.header-redesign .hamburger').toggleClass('is-active')
    $('body').toggleClass('overflow')
   })

   $('.mobile-menu__close').on('click', function(){
    $('.mobile-menu').toggleClass('is-open')
    $('.header-redesign .hamburger').toggleClass('is-active')
    $('body').toggleClass('overflow')
   })

  }

  mobileMenu(){
   this.toggleMobileMenu();

   let backId = null
   // Переход в подменю
   $(document).on('click','[data-menu]',function(){
   
    var title = $(this).data('menu');

    $('.mobile-menu__menu ul').removeClass('is-active')
    $(`[data-podmenu="${title}"]`).addClass('is-active')


    $('.mobile-menu').addClass('is-open-podmenu')
    $('.mobile-menu__top-title span').text(title)
    backId = $(this).closest('ul').data('podmenu')

   })
   // Назад
   $(document).on('click','[data-menu-back]',function(){

    if(!backId){
     $('.mobile-menu__menu ul').removeClass('is-active')
     $(`[data-podmenu=""]`).addClass('is-active')
     $('.mobile-menu').removeClass('is-open-podmenu')
    }else{

     $('.mobile-menu__menu ul').removeClass('is-active')
     $(`[data-podmenu=${backId}]`).addClass('is-active')
     $('.mobile-menu__top-title span').text(backId)
     backId = $(`[data-menu="${backId}"]`).closest('ul').data('podmenu')

    }

   })
  }

}

export default new App()