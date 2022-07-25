export default function(){
 $('.dropdown-module__button').on('click', function(e){

  $('.dropdown-module').each(function(){
   $(this).removeClass('is-open')
  })

  let $dropdown = $(this).closest('.dropdown-module');

  $dropdown.toggleClass('is-open')
 })

 $(document).mouseup( function(e){ 
		var div = $( ".dropdown-module" ); 
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) {
       $('.dropdown-module').removeClass('is-open')
		}
	});}