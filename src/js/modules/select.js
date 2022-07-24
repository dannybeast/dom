import "select2/dist/js/select2";

class Select{

  init() {

    $('.js-select').each(function(){
      let placeholder = $(this).data('placeholder')
      let minimumResultsForSearch = $(this).data('search') ? 1 : -1
      $(this).select2({
       minimumResultsForSearch,
       placeholder,
           "language": {
           "noResults": function() {
            return "Не найдено";
           }
        },
        dropdownParent: $(this).parent()
      });
    }).on('select2:open', function (e) {
     $( e.target).parent().find('.select2-search__field').attr('placeholder','Поиск');
   });
  }

}

export default new Select()