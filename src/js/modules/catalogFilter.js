class CatalogFilter{

 constructor() {
  this.curtain = '.page-filter__mobile-curtain',
  this.showClassName = 'is-show',
  this.btnOpenFilter = '.js-open-mobile-filter',
  this.btnOpenSorting = '.js-open-mobile-sorting',
  this.btnClose = '.js-mobile-curtain-close',
  this.sortingBlock = '.page-filter__sorting',
  this.mobileFilterPodmenu = '.js-page-filter-podmenu',
  this.mobileFilterItemLink = '[data-filter-item-href]',
  this.mobileFilterBack = '.page-filter__mobile-curtain-title.is-back',
  this.mobileFilterItem = '[data-filter-item-name]',
  this.filterTitle = '.js-filter-title'
 }

 toggleMobileFilter(){
  $('body').toggleClass('overflow')
   $(this.curtain).toggleClass( this.showClassName)
 }

 toggleMobileSorting() {
  $(this.sortingBlock).toggleClass( this.showClassName)
 }

 toggleMobileFilterPodmenu() {
  $(this.mobileFilterPodmenu).toggleClass( this.showClassName)
 }

 showMobileFilter(title, item){
  $(this.filterTitle).text(title)
   $(this.mobileFilterItem).removeClass(  this.showClassName);
   $(`[data-filter-item-name="${item}"]`).addClass(  this.showClassName)
   this.toggleMobileFilterPodmenu();
 }

 handlers(){
  let that = this

  $(this.btnOpenSorting).on('click', function(){
   that.toggleMobileSorting();
  })

  $(this.btnOpenFilter).on('click', function(){
   that.toggleMobileFilter();
  })

  $(this.btnClose).on('click', function(){
   that.toggleMobileFilter();
  })

  $(this.mobileFilterItemLink).on('click', function(){
   let title = $(this).data('filter-title')
   let item = $(this).data('filter-item-href')
   that.showMobileFilter(title,item)
  })

  $(this.mobileFilterBack).on('click', function(){
   that.toggleMobileFilterPodmenu();
  })

 }

 init(){
  this.handlers();
 }
 

}

export default new CatalogFilter()