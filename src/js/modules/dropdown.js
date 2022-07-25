export default function(){
 $('.dropdown-module__button').on('click', function(e){

  $('.dropdown-module').each(function(){
   $(this).removeClass('is-open')
  })

  let $dropdown = $(this).closest('.dropdown-module');

  $dropdown.toggleClass('is-open')
 })


$('[data-filter-item]').each(function(){
 name = $(this).data('filter-name').toLowerCase();
 $(this).attr('data-filter-name',name)
})

$('[data-search]').on('keyup', function(){
 var searchVal = $(this).val();
	var filterItems = $(this).closest('.dropdown-module').find('[data-filter-item]');
console.log(searchVal.toLowerCase());
	if ( searchVal != '' ) {
		filterItems.addClass('hidden');
		$(this).closest('.dropdown-module').find('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
	} else {
		filterItems.removeClass('hidden');
	}
})


 $(document).mouseup( function(e){ 
		var div = $( ".dropdown-module" ); 
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) {
       $('.dropdown-module').removeClass('is-open')
		}
	});}