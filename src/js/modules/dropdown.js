export default function(){

 // open toggle
 $('.dropdown-module__button').on('click', function(e){
  $('.dropdown-module').each(function(){
   $(this).removeClass('is-open')
  })
  let $dropdown = $(this).closest('.dropdown-module');
  $dropdown.toggleClass('is-open')
 })


 // search
$('[data-filter-item]').each(function(){
 let itemName = $(this).data('filter-name') ? $(this).data('filter-name').toLowerCase() : '';
 $(this).attr('data-filter-name',itemName)
})

$('[data-search]').on('keyup', function(){
 var searchVal = $(this).val();
 let $parent =  $(this).parent().parent()
	var filterItems = $parent.find('[data-filter-item]');

	if ( searchVal != '' ) {
		filterItems.hide()
  $parent.find('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').show()
	} else {
		filterItems.show()
	}

})

//

 // hide mouseup
 $(document).mouseup( function(e){ 
		var div = $( ".dropdown-module" ); 
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) {
       $('.dropdown-module').removeClass('is-open')
		}
	});


}