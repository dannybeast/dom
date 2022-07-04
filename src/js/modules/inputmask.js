import inputmask from "inputmask/dist/jquery.inputmask";


class Masks {


  mask(el, mask, params) {
    if (el.val()) {
      el.attr('complete', true)
    }
    el.inputmask(mask, {
      ...params,
      placeholder: "_",
      'onincomplete': function () {

      },
      oncomplete: function () {
        $(this).attr('complete', true)
      },
    }).on('input', function () {
      $(this).removeAttr('complete')
    })
  }


  maskPhone() {
    this.mask($('.js-phone-mask'), "+7(999)999-99-99")
  }
  maskDate() {
    this.mask($('.js-date-mask'), "99.99.9999")
  }
  maskYear() {
   this.mask($('.js-year-mask'), "9999")
 }
}


export default new Masks()
