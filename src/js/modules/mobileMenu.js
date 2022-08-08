class MobileMenu{

 constructor() {
  this.backId = null,
  this.podmenuLink = '[data-menu]',
  this.backLink = '[data-menu-back]',
  this.activeClass = 'is-active',
  this.openClass = 'is-open',
  this.mobileMenu = '.mobile-menu',
  this.openedPodmenuClass = 'is-open-podmenu',
  this.podmenuAttr = 'data-podmenu',
  this.podmenuTitleEl = '.mobile-menu__top-title span',
  this.podmenuEl = '.mobile-menu ul',
  this.closeMobileMenuBtn = '.mobile-menu__close',
  this.openMobileMenuBtn = '.header-redesign__btn-menu',
  this.overflowClass = 'overflow',
  this.body = 'body',
  this.hamburger = '.header-redesign .hamburger'
 }

 open(){
  $(this.mobileMenu).toggleClass(this.openClass)
  $(this.hamburger).toggleClass(this.activeClass)
  $(this.body).toggleClass(this.overflowClass)
 }

 close(){
  $(this.mobileMenu).toggleClass(this.openClass)
   $(this.hamburger).toggleClass(this.activeClass)
   $(this.body).toggleClass(this.overflowClass)
 }

 openPodmenu(el){
  $(this.body).toggleClass(this.overflowClass)
  var title = el.data('menu');

  $(this.podmenuEl).removeClass(this.activeClass)
  $(`[${this.podmenuAttr}="${title}"]`).addClass(this.activeClass)


  $(this.mobileMenu).addClass(this.openedPodmenuClass)
  $(this.podmenuTitleEl).text(title)
  this.backId = el.closest('ul').data('podmenu')
 }

 back() {
  if(!this.backId){
   $(this.podmenuEl).removeClass(this.activeClass)
   $(`[${this.podmenuAttr}=""]`).addClass(this.activeClass)
   $(this.mobileMenu).removeClass(this.openedPodmenuClass)
  }else{

   $(this.podmenuEl).removeClass(this.activeClass)
   $(`[${this.podmenuAttr}=${this.backId}]`).addClass(this.activeClass)
   $(this.podmenuTitleEl).text(this.backId)
   this.backId = $(`[data-menu="${this.backId}"]`).closest('ul').data('podmenu')

  }

 }


 handlers(){
  let that = this

  $(document).on('click',this.podmenuLink,function(e){
   e.preventDefault()
   that.openPodmenu($(this));
  })

  $(document).on('click',this.backLink,function(e){
   e.preventDefault()
   that.back();
  })

  // Open
  $(this.openMobileMenuBtn).on('click', function(e){
   e.preventDefault();
   that.open()
  })

  // Close
  $(this.closeMobileMenuBtn).on('click', function(){
   that.close()
  })

 }

 init(){
  this.handlers();
 }
 

}

export default new MobileMenu()