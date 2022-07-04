import "select2/dist/js/select2";

class Select{

  init() {
    $('.js-select').each(function(){
      let placeholder = $(this).data('placeholder')
      $(this).select2({
        minimumResultsForSearch: -1,
        placeholder
      });
    })
  }

}

export default new Select()